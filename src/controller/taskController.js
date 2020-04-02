'use strict';

process.env.SECRET_KEY = 'secret';

var TaskService = require('../service/task.service')

module.exports.task = async(request, h) => {
    try{
        let todoTask = await TaskService.todoGetService(request);
        return todoTask;

    } catch (err){
        return {err}
    }
}

module.exports.postTodo = async(request, h) => {
    let todoTaskDetail = {
        tasks_name: request.payload.tasks_name
    }

    try{
        
        let todoTask = await TaskService.postTodoService(request, todoTaskDetail);
        return todoTask;

    } catch (err){
        return {err}
    }
}

module.exports.todoId = async(request, h) => {
    try {
        let todoId = await TaskService.getTodoId(request);
        return todoId;
    } catch(err) {
        return `Error: ${err}`
    }
}

module.exports.updateTodo = async(request, h) => {
    try {
        let updatedTodoId = await TaskService.updateTodoTask(request);
        return updatedTodoId;
    } catch(err) {
        return `Error: ${err}`
    }
}

module.exports.deleteTodo = async(request, h) => {
    try {
        let deleteTodoId = await TaskService.deleteTodoTask(request);
        return deleteTodoId;
    } catch(err) {
        return `Error: ${err}`
    }
}