const ToDo =require('../model/todo-model')


class ToDoController {
    constructor(){}

    createToDo=async(req,res)=>{
        try{
            // console.log('requestBody',req.body);
            const {text,status}=req.body;
            const data=new ToDo({text,status});
            const savedata=await data.save();
            return res.status(200).send({message:"toDoitem saved sucessfully",data:[savedata]});
         
        }
        catch(error){
           return  res.status(400).send({message:"error",error:error.message})
        }
    }

   ToDoList= async(req,res)=>{
        try {
              const data = await ToDo.find();
              return res.status(200).send({message:'toDoitem data::',data:data});
           } 
        catch(error) {
              return res.status(400).send({message:"Error:",error:error.message})
        
           } 
         
        }

     deleteTodo=async(req,res)=>{
       try{ 
              const taskId=req.params.id;
              console.log('taskId',taskId);
               const deleteTask=await ToDo.deleteOne({_id:taskId});
               console.log('deleteTask',deleteTask);
              return res.status(200).send({message:"task deleted successfully"});
             }
      
      catch(error){
         return res.status(400).send({"error":error.message})
      }
    }

}

const todoController=new ToDoController();
module.exports=todoController;
// export default todoController