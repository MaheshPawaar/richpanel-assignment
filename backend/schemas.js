const zod=require('zod')

module.exports.signupSchema=zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
})

module.exports.signinSchema=zod.object({
  email: zod.string().email(),
  password: zod.string(),
})