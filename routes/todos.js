const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo , getTodoById} = require("../controllers/getTodo");
const {updataTodo} = require("../controllers/updataTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

router.post("/createTodo" , createTodo);
router.get("/getTodos" , getTodo);
router.get("/getTodos/:id" , getTodoById);
router.put("/updataTodo/:id",updataTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;

