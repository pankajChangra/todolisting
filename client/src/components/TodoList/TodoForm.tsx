import React, { createRef, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../store/actions/todo.act";

interface IProps {
    todoListSubmit: any;
}

function TodoForm(props: IProps){    
    
    const textInput = createRef<HTMLInputElement>()
    const textForm = createRef<HTMLFormElement>()
    const [message, setMessage] = useState("");

    function onSubmit(event: any){
        event.preventDefault();     
        if(textInput.current) {
            if(textInput.current.value !== ""){
                let data = {
                    tasks_name: textInput.current.value
                }
                props.todoListSubmit(data);
                textForm.current?.reset();
            } else {
                setMessage('This field is required*')
            }
        }
    }

    return (
    <React.Fragment>    
        <form ref={textForm} onSubmit={onSubmit} className="form-inline mt-5">
            <input type="text" ref={textInput} onClick={() => setMessage('')} className="form-control mr-3" placeholder="add a new todo..."/>
            <button type="submit" className="btn btn-primary">Add</button> 
        </form>
        <span className="text-danger">{message}</span>
    </React.Fragment>
    );   
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        todoListSubmit: (data: any) => dispatch(actions.todoListSubmit(data)),
    };
};

const connector = connect(null, mapDispatchToProps)

export default connector(TodoForm);
