const express = require("express");
const { v4 } = require("uuid");

const app = express();
app.use(express.json());

const todos = [];

app.get("/todos", (req, res) => {
  return res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === id);

  return res.json(todo);
});

app.post("/todos", (req, res) => {
  const { title } = req.body;

  const todo = {
    id: v4(),
    title,
    completed: false,
  };

  todos.push(todo);

  return res.json(todo);
});

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
