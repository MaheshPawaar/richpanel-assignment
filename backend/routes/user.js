const express = require('express');
const bcrypt = require('bcrypt');
const { signupSchema, signinSchema } = require('../schemas');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const existingUser = await User.findOne({
    email: body.email,
  });

  if (existingUser) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  const user = await User.create({
    name: body.name,
    email: body.email,
    password: hashedPassword,
  });

  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: 'User created successfully',
    token: token,
  });
});

router.post('/signin', async (req, res) => {
  const { success } = signinSchema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });

  if (!existingUser) {
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs',
    });
  }

  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    existingUser.password
  );

  if (isPasswordMatch) {
    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  return res.status(411).json({
    message: 'Error while logging in...',
  });
});

module.exports = router;
