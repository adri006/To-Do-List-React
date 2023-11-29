import React ,{useState} from "react";
import {v4 as uuid} from "uuid";

function AddTodo({todo , setTodo}) { 

    const [value , setValue] = useState('')

    function saveTodo() {
        if (value.trim() === "") {
            return; 
          }
      
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return(
            <div>
                <input placeholder="e. g. движеня кылыш керек" className="to-do__input" value={value} onChange={ (e) => setValue(e.target.value)}/>
                <p class="to-do__text">Pick a category</p>
                <div class="category__blocks">
                    <label class="category__block">
                        <input type="radio" name="category" class="category__btn" value="business"/>
                        <span class="category__btn-custom business-btn"></span>
                        Business
                    </label>
                    <label class="category__block">
                        <input type="radio" name="category" class="category__btn" value="personal"/>
                        <span class="category__btn-custom personal-btn"></span>
                        Personal
                    </label>
                </div>
                <button onClick={saveTodo} className="add__btn">Add todo</button>
            </div>
    )
}

export default AddTodo