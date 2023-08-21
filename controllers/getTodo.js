//import the model
const Todo = require('../models/Todo');

exports.getTodo = async(req,res) => {
 try {
    // fetch on todo items from database
    const todos = await Todo.find({});


    //response 
    res.status(200)
    .json({
        success:true,
        data:todos,
        message:"Entire todo Data is fetched",
    })
 } catch (error) {
    console.error(error)
    res.status(500)
    .json({
        success:false,
        error:error.message,
        message:"Nhi Chlra Bhai",
    });
 }

}

exports.getTodoById = async(req,res) => {
    try {
        //extract todo item by ID
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with Given id",
            })
        }
         res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
         })
        
    } catch (error) {
        console.error(error)
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Nhi Chlra Bhai",
        })    
    }
}
