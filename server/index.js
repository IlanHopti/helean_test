const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const routes = require('./routes.js');
app.use("/api", routes);
app.listen(3333, () => console.log('Server running on port 3333'));