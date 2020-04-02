import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem"
import * as actions from "../../store/actions/todo.act"

interface IProps {
    name? : any
    errName?: any
    message?: any
    getTodoList? :any
    todoList: any | any[]
    items? :  any
    deleteMessage?: string
}

interface IState {
    taskname: boolean
    errorName: boolean
    message: string;
    deleteMessages: boolean
}

class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      taskname: false,
      errorName: false,
      message: "",
      deleteMessages: false
    };
  }

  componentDidMount = () => {
    this.props.getTodoList();
  }

  componentDidUpdate = (prevProps: any) => {
    if (prevProps.name !== this.props.name) {
        let {name} = this.props
        if(name !== undefined && name !== null && name !== ""){
            this.setState({
                taskname: true,
            });
        } else {
            this.setState({
                taskname: false
            })
        }
        this.props.getTodoList();
    }

    if (prevProps.errName !== this.props.errName) {
        let {errName} = this.props
        if(errName !== undefined && errName !== null && errName !== ""){
            this.setState({
                errorName: true,
            });
        } else {
            this.setState({
                errorName: false
            })
        }
    }

    if (prevProps.deleteMessage !== this.props.deleteMessage) {
        let {deleteMessage} = this.props
        if(deleteMessage !== undefined && deleteMessage !== null && deleteMessage !== ""){
            this.setState({
                deleteMessages: true,
            });
        } else {
            this.setState({
                deleteMessages: false
            })
        }
        this.props.getTodoList();
    }
  };

  render() {
    if(this.props.todoList !== undefined && this.props.todoList !== null){
        var items = this.props.todoList.map((item: any, index: any) => {
            return (
              <TodoListItem key={index} item={item} index={index}/>
            );
        });
    }


    let { taskname, errorName,deleteMessages } = this.state;
    return (
      <React.Fragment>
        {(taskname === true) ? (
          <div className="alert alert-success mt-5" role="alert">
            {this.props.name !== undefined && this.props.name !== null && this.props.name !== "" ? `${this.props.name} ${this.props.message}` : null}
          </div>
        ) : null}

        {deleteMessages === true ? 
          <div className="alert alert-success mt-5" role="alert">
          {this.props.deleteMessage !== undefined && this.props.deleteMessage !== null && this.props.deleteMessage !== "" ?`${this.props.deleteMessage}` : null}
          </div> : null
        }

        {errorName === true ? 
        <div className="alert alert-danger mt-5" role="alert">
        {this.props.errName !== undefined && this.props.errName !== null && this.props.errName !== "" ?`${this.props.errName} ${this.props.message}` : null}
        </div> : null}

        <ul className="list-group mt-5"> {items} </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.todoDataList.name,
    message: state.todoDataList.message,
    errName: state.todoDataList.errName,
    todoList: state.todoDataList.todoList,
    deleteMessage: state.todoDataList.deleteMessage
  };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        getTodoList: () => dispatch(actions.getTodoList()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TodoList);
