const express = require('express');
const app = express();

// Hello World を返すエンドポイント
app.get('/', (req, res) => {
  res.send('Hello World');
});

// サーバ起動
app.listen(9000, () => {
  console.log('Server is running on port 9000');
});