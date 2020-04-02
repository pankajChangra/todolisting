import React from "react";
import TodoListItem from "./TodoListItem";
import { connect } from 'react-redux';

interface IProps {
    items? :  any
    markTodoDone: any
    removeItem: any
    // taskName: any
    // message: string
    // errName: string
}

interface IState {
    name: string
    errName: string
}

class TodoList extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            name: "",
            errName: ""
        }
    }

    

    // componentDidUpdate = (prevProps: any) => {
    //     if(prevProps.name !== this.props.taskName){
    //         this.setState({
    //             name: this.props.taskName
    //         })
    //     }
    //     if(prevProps.errName !== this.props.errName){
    //         this.setState({
    //             errName: this.props.errName
    //         })
    //     }
    // }
    
    render () {
        var items = this.props.items.map((item: any, index: any) => {
            return (
              <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
            );
        });
      
        // let { name, errName } = this.state
      return (
          <React.Fragment>
              {/* {console.log(name)}
              {name !== undefined && name !== null && name !== "" ||  errName !== undefined && errName !== null && errName !== ""?
                <div className={name !== undefined && name !== null && name !== "" ? "alert alert-success" : "alert alert-danger"} role="alert">
                    <h4 className="alert-heading">{`${name}`}</h4>{`${this.props.message}`}
                </div>
                : null} */}
              <ul className="list-group"> {items} </ul>
          </React.Fragment>
      );
    }
  }



const mapStateToProps = (state:any) => {
    return {
        taskName: state.todoDataList.name,
        message: state.todoDataList.message,
        errName: state.todoDataList.errName
    };
};

const connector = connect(mapStateToProps, null)

export default connector(TodoList);