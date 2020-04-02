import axios from "axios";
import * as config from "../config/config";
import getOptions from "./http.header";

function postTodo(payload: any) {
    return axios
      .post(config.API_URL + "/todo/tasks", payload, getOptions())
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
}

function getTodoList() {
  return axios
    .get(config.API_URL + "/tasks", getOptions())
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
}

function deleteTodoItems(payload: any) {
  return axios
    .delete(config.API_URL + `/delete/task/${payload}`, getOptions())
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
}

export const todoListService = {
  postTodo,
  getTodoList,
  deleteTodoItems
};