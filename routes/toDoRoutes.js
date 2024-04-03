const express =require('express'); 
const todoController=require('../controller/todoController');

const router=express.Router();


router.post('/todo-item', todoController.createToDo);
router.get('/get-toDoitem',todoController.ToDoList);
router.delete('/delete-todo/:id',todoController.deleteTodo);



module.exports = router;
