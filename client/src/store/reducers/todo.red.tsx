import * as actionTypes from "../actions/actionTypes/todo";
import { updateObject } from "../utility";

export interface SystemState {
  error: string;
  loading: boolean;
  message: string;
  name: string;
  errName: string;
  todoList: TodoListItems[]
  deleteMessage: string
}

interface TodoListItems
{
    id: number, 
    tasks_name: string,
}

const initialState: SystemState = {
  error: '',
  loading: false,
  message: '',
  name: '',
  errName: '',
  todoList: [],
  deleteMessage: ""
};

const todoPostStart = (state: any) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const todoPostSuccess = (state: any, action: any) => {
  
  return updateObject(state, {
    error: null,
    loading: false,
    message: action.data.message,
    name: action.data.name
  });
};

const todoPostFail = (state: any, action: any) => {
  return updateObject(state, {
    error: null,
    loading: false,
    errName: action.message.name,
    message: action.message.message
  });   
}

/**
 * Get todo list
 */

const todoGetStart = (state: any) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const todoGetSuccess = (state: any, action: any) => {
  return updateObject(state, {
    error: null,
    loading: false,
    todoList: action.data
  });
};


const todoGetFail = (state: any) => {
  return updateObject(state, {
    error: null,
    loading: false,
  });   
}

/**
 * Delete todo list
 */

const deleteTodoStart = (state: any) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const deleteTodoSuccess = (state: any, action: any) => {
  return updateObject(state, {
    error: null,
    loading: false,
    deleteMessage: action.message
  });
};


const deleteTodoFail = (state: any, action: any) => {
  return updateObject(state, {
    error: null,
    loading: false,
    errName: action.message,
  });   
}

const resetMessage = (state: any) => {
  return updateObject(state, {
    error: '',
    loading: false,
    message: '',
    name: '',
    errName: '',
    deleteMessage: ""
  })
}

const todoDataList = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TODO_TASK_POST_START:
      return todoPostStart(state);
    case actionTypes.TODO_TASK_POST_SUCCESS:
      return todoPostSuccess(state, action);
    case actionTypes.TODO_TASK_POST_FAIL:
      return todoPostFail(state, action);

    case actionTypes.GET_TODO_TASK_START:
      return todoGetStart(state);
    case actionTypes.GET_TODO_TASK_SUCCESS:
      return todoGetSuccess(state, action);
    case actionTypes.GET_TODO_TASK_FAIL:
      return todoGetFail(state);

    case actionTypes.DELETE_TODO_TASK_START:
      return deleteTodoStart(state);
    case actionTypes.DELETE_TODO_TASK_SUCCESS:
      return deleteTodoSuccess(state, action);
    case actionTypes.DELETE_TODO_TASK_FAIL:
      return deleteTodoFail(state, action);

    case actionTypes.RESET_ALERT_MESSAGE:
        return resetMessage(state);

    default:
      return state;
  }
};

export default todoDataList;