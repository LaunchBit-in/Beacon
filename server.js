require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use((req, res, next)=> {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    service:"beacon",
    status:"running"
  });
});


app.get("/health", (req, res) => {
  res.json({
    status:"healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()

  });
});

const articlesRouter = require("./routes/articles");
app.use("/articles",articlesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

