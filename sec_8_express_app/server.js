const express = require("express");
const path = require("path");

const friendsRouter = require("./router/friends.router");
const messagesRouter = require("./router/messages.router");

const app = express();

const port = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} time: ${delta}ms`);
});

app.use(express.static('public'))
app.use(express.json());

app.get("/", (req, res) => {
  res.render('index', {
    title: 'Welcome to my website',
    caption: 'Welcome to my caption',
  });
})

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
