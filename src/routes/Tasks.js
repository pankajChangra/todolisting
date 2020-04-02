'use strict';

const taskController = require('../controller/taskController');

process.env.SECRET_KEY = 'secret';
const Joi = require('@hapi/joi');

module.exports = [
    {
        method: 'GET',
        path: '/tasks',
        handler: taskController.task
    },

    {
        method: 'POST',
        path: '/todo/tasks',
        handler: taskController.postTodo,
        options:{
            auth : false,
            description: 'Creating todo list.',
            notes: 'todo post api',
            tags: ['api', 'Todo'], 
            validate:{
                payload:Joi.object().keys({
                    tasks_name: Joi.string().required(),
                }).unknown(true)
            }
        }
    },

    {
        method: 'GET',
        path: '/task/{id}',
        handler: taskController.todoId
    },

    {
        method: 'PUT',
        path: '/update/task/{id}',
        handler: taskController.updateTodo,
        options:{
            auth : false,
            description: 'Updating api',
            tags: ['api', 'Todo'], 
            validate:{
                payload:Joi.object().keys({
                    tasks_name: Joi.string().required(),
                }).unknown(true)
            }
        }
    },

    {
        method: 'DELETE',
        path: '/delete/task/{id}',
        handler: taskController.deleteTodo
    },

]