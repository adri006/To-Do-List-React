import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList"
function Content() {

    const [todo , setTodo] = useState([])

    return(
        <div>
            <div className="to-do__container">
                <h1 className="to-do__title">
                    What's up, {" "}
                    <span className="username" contentEditable>
                     Adrian
                    </span>
                </h1>
                <h3 class="to-do__subtitle font-f-400">CREATE A TODO</h3>
                <p class="to-do__text">What's on your to-do list?</p>
                <AddTodo 
                    todo = {todo} 
                    setTodo = {setTodo} />
            </div>    
            <ToDoList 
                todo = {todo}
                setTodo = {setTodo}/>
        
        </div>
    )
}

export default Content