const Task = require('../models/Task');

module.exports.todoGetService = () =>{
    return new Promise(async(resolve, reject) => {
        
        let task = await Task.findAll()

        if(task){
            return resolve({ status: 200, task})
        } else {
            const err = {
                status: 404,
                message: "no record found"
            }           
            reject (err)
        }
    })
}

module.exports.postTodoService = (request, todoTaskDetail) =>{
    return new Promise(async(resolve, reject) => {
        
        let alreadyData = await Task.findOne({
            where : {
                tasks_name: request.payload.tasks_name
            }
        })

        if(alreadyData){
            reject ({status: 409,
                name: request.payload.tasks_name,
                message: `data already exists. Trying something new`})
        } else {
            if(!todoTaskDetail){
                reject ({status: 409,
                message: `something went wrong`})
            } else {
            Task.create(todoTaskDetail)
            return resolve({ status: 200,
                    name: request.payload.tasks_name,
                    message: 'data has been submitted successfully'
                })
            }
        }
    })
}


module.exports.getTodoId = (request) => {
    return new Promise(async (resolve, reject) => {
        let getTodoTaskId = await Task.findOne({
            where: {
                id: request.params.id
            }
        })

        if(getTodoTaskId) {
            return resolve({ status: 200,
                response: getTodoTaskId,
                message: 'one record found'
            })
        } else {
            reject ({status: 404,
                message: `task doesn't exist`
            })
        }
    })
}

module.exports.updateTodoTask = (request) => {
    return new Promise(async(resolve, reject) => {
        if(!request.payload.tasks_name) {
            reject ({
                status: 400,
                message: `bad request`
            })
        } else {
            let updateTodoTask = await Task.update({
                    tasks_name: request.payload.tasks_name
                }, {
                    where : {id: request.params.id}
                } 
            )

            if(updateTodoTask) {
                let getTodoTaskId = await Task.findOne({
                    where: {
                        id: request.params.id
                    }
                })
                
                resolve({
                    status: 200,
                    data: getTodoTaskId,
                    message: `data has been updated successfully`
                })
            } else {
                reject ({
                    status: 400,
                    message: `bad request`
                })
            }
        }
    })
}

module.exports.deleteTodoTask = (request) => {
    return new Promise(async(resolve, reject) => {
        let deleteTodo = await Task.destroy({
            where : {
                id: request.params.id
            }
        })

        if(deleteTodo) {
            resolve ({
                status: 200,
                message: `data has been delete successfully`
            })
        } else {
            reject ({
                status: 406,
                message: `data you have provided is not acceptable`
            })
        }
    })
}