import React, { createRef } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../store/actions/todo.act";

interface IProps {
    addItem? : any
    todoListSubmit? :any  
}

function TodoForm(props: IProps){    
    
    const textInput = createRef<HTMLInputElement>()
    const textForm = createRef<HTMLFormElement>()

    function onSubmit(event: any){
        event.preventDefault();        
        if(textInput.current) {
            var newItemValue = textInput.current.value;
            props.addItem({newItemValue});

            let data = {
                tasks_name: newItemValue
            }
            props.todoListSubmit(data);
            textForm.current?.reset();
        }
    }

    return (
    <form ref={textForm} onSubmit={onSubmit} className="form-inline mt-5">
        <input type="text" ref={textInput} className="form-control mr-3" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-primary">Add</button> 
    </form>
    );   
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        todoListSubmit: (data: any) => dispatch(actions.todoListSubmit(data)),
    };
};

const connector = connect(null, mapDispatchToProps)

export default connector(TodoForm);
