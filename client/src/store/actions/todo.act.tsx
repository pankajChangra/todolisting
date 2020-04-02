import {
    TODO_TASK_POST_START,
    TODO_TASK_POST_SUCCESS,
    TODO_TASK_POST_FAIL,
    GET_TODO_TASK_START,
    GET_TODO_TASK_SUCCESS,
    GET_TODO_TASK_FAIL,
    RESET_ALERT_MESSAGE,
    DELETE_TODO_TASK_START,
    DELETE_TODO_TASK_SUCCESS,
    DELETE_TODO_TASK_FAIL,
} from "./actionTypes/todo";
import { todoListService } from "../../services/todo.service"

export const todoPostStart = () => {
    return {
      type: TODO_TASK_POST_START
    };
};

export const todoPostSuccess = (data:string | string[]) => {
    return {
        type: TODO_TASK_POST_SUCCESS,
        data: data,
    }
}

export const todoPostFail = (message :any) => {
    return {
        type: TODO_TASK_POST_FAIL,
        message: message
    }
}

export const resetMessage = () => {
  return {
    type: RESET_ALERT_MESSAGE
  }
}

export const todoListSubmit = (data: any) => {
    return (dispatch:any) => {
      dispatch(todoPostStart());
      todoListService
        .postTodo(data)
        .then(res => {
          if (res.data.status === 200) {
            dispatch(todoPostSuccess(res.data));
          } else if(res.data.status === 409){
            dispatch(todoPostFail(res.data.err));
          } else {
            dispatch(todoPostFail(res.data.err));
          }
        })
        .catch(err => {
          dispatch(todoPostFail(err))
        });
        setTimeout(() => {
          dispatch(resetMessage());
        }, 5000);
    };
}


/**
 * Get task list
 */


export const todoGetStart = () => {
  return {
    type: GET_TODO_TASK_START
  };
};

export const todoGetSuccess = (data:string | string[]) => {
  return {
      type: GET_TODO_TASK_SUCCESS,
      data: data,
  }
}

export const todoGetFail = (message :any) => {
  return {
      type: GET_TODO_TASK_FAIL,
      message: message
  }
}

export const getTodoList = () => {
  return (dispatch:any) => {
    dispatch(todoGetStart());
    todoListService
      .getTodoList()
      .then(res => {
        if (res.data.status === 200) {
          const todoList = res.data.task;
          dispatch(todoGetSuccess(todoList));
        } else {
          dispatch(todoGetFail(res.data));
        }
      })
      .catch(err => {
        dispatch(todoGetFail(err))
      });
      setTimeout(() => {
        dispatch(resetMessage());
      }, 10000);
  };
}


/**
 * Delete the todo item
 */


export const deleteTodoStart = () => {
  return {
    type: DELETE_TODO_TASK_START
  };
};

export const deleteTodoSuccess = (message:string | string[]) => {
  return {
      type: DELETE_TODO_TASK_SUCCESS,
      message: message,
  }
}

export const deleteTodoFail = (message :any) => {
  return {
      type: DELETE_TODO_TASK_FAIL,
      message: message
  }
}

export const deleteTodoItem = (payload: any) => {
  return (dispatch:any) => {
    dispatch(deleteTodoStart());
    todoListService
      .deleteTodoItems(payload)
      .then(res => {
        if (res.data.status === 200) {
          const todoList = res.data.message;
          dispatch(deleteTodoSuccess(todoList));
        } else {
          dispatch(deleteTodoFail('Something went wrong'));
        }
      })
      .catch(err => {
        dispatch(deleteTodoFail(err))
      });
      setTimeout(() => {
        dispatch(resetMessage());
      }, 5000);
  };
}
 