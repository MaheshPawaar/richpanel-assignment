// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
const express = require('express');
const cors = require('cors');
const appRouter = require('./routes/index');
const app = express();

app.use(cors())
app.use(express.json());

app.use('/api',appRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serving on Port ${PORT}...`);
});
