import React from 'react'
import { connect } from "react-redux";
import * as actions from "../../store/actions/todo.act";

interface IProps {
    index?: any
    removeItem? :any
    markTodoDone? : any
    item?:  any
    deleteTodoItem? : any
}

interface IState {
    openModal: boolean
    todoClass: string
}

class TodoListItem extends React.Component<IProps, IState>{
 
    constructor(props: IProps){
        super(props)
        this.state ={
            openModal: false,
            todoClass: "undone"
        }
    }
    
    onClickClose = () => {
        this.props.deleteTodoItem(this.props.item.id)
    };

    onClickDone = () => {
        let { todoClass } = this.state
        if(todoClass === "undone") {
            this.setState({
                todoClass: "done"
            })
        } else {
            this.setState({
                todoClass: "undone"
            })
        }
    }

    render () {
        let { todoClass } = this.state
        return(
            <li className="list-group-item ">
                <div className={ todoClass }>
                    <i className="fa fa-check" aria-hidden="true" onClick={()=>this.onClickDone()}></i>
                    {this.props.item.tasks_name}
                    <button type="button" className="close" onClick={()=>this.onClickClose()}>&times;</button>
                </div>
            </li>     
        );
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        deleteTodoItem: (payload: any) => dispatch(actions.deleteTodoItem(payload)),
    };
};

const connector = connect(null, mapDispatchToProps);

export default connector(TodoListItem);
