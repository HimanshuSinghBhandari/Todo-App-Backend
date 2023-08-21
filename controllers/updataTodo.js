const Todo = require('../models/Todo');

exports.updataTodo = async(req,res) => {
    try {
        const{id} = req.params;
        const {title,description} = req.body;

        const todos = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description , updateAt : Date.now()}
        )
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
        })
    }
        
}
