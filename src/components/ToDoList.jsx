import React , {useState}from "react";


function ToDoList({todo , setTodo}) {

    const [edit , setEdit] = useState(null)
    const [value , setValue] = useState()
    
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!==id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }


    return(
        <div className="to-do-task to-do__container">
            <h4 className="font-f-400">TODO LIST</h4>
            <div className="task-list__block"> 
            
            {
                todo.map(item => (
                    <div key={item.id} className="task-list__task">
                        {
                            edit === item.id ? 
                                <div>
                                    <input type="text" className="change-input" value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div> :
                                <label htmlFor=""className="task-list__text">    
                                    <button onClick={ () => statusTodo(item.id)} className={ !item.status ? "done-btn" : "status-btn"}></button>
                                    <div className={!item.status ? "close" : ''}>{item.title}</div>
                                </label>
                                }

                        {
                            edit === item.id ? 
                            <div>
                                <button onClick={() => saveTodo(item.id)} className="task__btn save-btn">Save</button>
                            </div> :
                            <div className="button-block">
                                <button onClick={ () => editTodo(item.id, item.title)} className="task__btn edit-btn">Edit</button>
                                <button onClick={ () => deleteTodo(item.id)} className="task__btn delete-btn">Delete</button>
                            </div>
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ToDoList