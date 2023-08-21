//import the model
const Todo = require('../models/Todo');

// detail route handler 
exports.deleteTodo = async(req,res) => {
    try {
         const {id}=req.params;

         await Todo.findByIdAndDelete(id);
         
        res.status(200).json(
            {
                success:true,
                message: "Todo Deleted",
            }
        );

    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
        
    }
}