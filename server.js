import Routes from './routes/index';
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(Routes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
