const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend Dat San Server Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});