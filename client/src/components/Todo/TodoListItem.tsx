import React from 'react'

interface IProps {
    index?: any
    removeItem? :any
    markTodoDone? : any
    item? :  any
}

export default class TodoListItem extends React.Component<IProps>{
 
    onClickClose = () => {
      console.log("jznda")
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone = () => {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render () {
      var todoClass = this.props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group-item ">
          <div className={todoClass}>
            <i className="fa fa-check" aria-hidden="true" onClick={this.onClickDone}></i>
            {this.props.item.value}
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>     
      );
    }
}