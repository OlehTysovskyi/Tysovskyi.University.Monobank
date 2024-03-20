const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

const { testConnection } = require("./config/database");
testConnection();

const createTables = require("./utils/createTables")
createTables();
