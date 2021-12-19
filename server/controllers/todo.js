var Todo = require("../models/todo")

exports.find = async (req,res)=>{
    if(req.params.id){
        const id = req.params.id
        await Todo.findById(id)
        .then(item=>{
            // res.send(item)
            res.render("view",{item})
        })
        .catch(error=>{
            res.status(404).send({
                message:error.message || `something went wrong.`
            })
        })
    }else{
        await Todo.find()
        .then(todo=>{
            res.render("index",{todo})
            // res.send(todo)
        })
        .catch(error=>{
            res.status(500).send({
            message:error.message || `something went wrong.` 
            })
        })
    }
}
exports.create = (req,res)=>{
    if(!req.body){
        res.status(500).send({
            message:`Fill out all the fields.`
        })
    }
    let todo = new Todo({
        record:req.body.record
    })
    todo.save(todo)
    .then(item_data=>{
        // res.send(item_data)
        res.redirect("/")
    })
    .catch(error=>{
        res.status(400).send({
            message:message.error || `something went wrong.`
        })
    })
}
exports.edit =(req,res)=>{
    if(req.params.id){
        const id = req.params.id
        Todo.findById(id)
        
        .then(items=>{
           res.render("edit",{items}) 
        })
        .catch(error=>{
            res.status(404).send({
                message:error.message || `something went wrong.`
            })
        })    
    }else{
        res.render("404")
    }
}
exports.update = (req,res) =>{
    if(!req.body){
        res.status(500).send({
            message:`Fill out all the fields`
        })
    }
    if(req.params.id){
        const id = req.params.id
        Todo.findByIdAndUpdate(id,req.body,{useFindAndModify:true})
        .then(items=>{
           res.render("index") 
        //    res.send(items)
        })
        .catch(error=>{
            res.status(404).send({
                message:error.message || `something went wrong.`
            })
        })    
    }else{
        res.render("404")
    }
}

