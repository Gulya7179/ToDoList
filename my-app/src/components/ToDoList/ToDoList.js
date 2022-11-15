import React, {useState} from "react";
import s from './ToDoList.module.css'


function ToDoList ({ todo, setToDo }) {

    const [edit, setEdit] = useState (null)
    const [value, setValue] = useState ('')

    function deleteToDo (id) {
        let newToDo = [...todo].filter(item => item.id!==id)
        setToDo(newToDo)
    }

    function statusToDo (id) {
        let newToDo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setToDo(newToDo)
    }

    function editToDo (id, title) {
        setEdit (id)
        setValue (title)
    }

    function saveToDo (id) {
        let newToDo = [...todo].map (item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setToDo(newToDo)
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map( item => (
                    <div className = {s.item} key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input value={value} onChange = { (e) =>
                                    setValue (e.target.value) }/>
                                </div> :
                                <div className = {item.status ?s.state: null}>{ item.title }</div>
                        }

                        {
                            edit === item.id ?
                                <div>
                                    <button onClick={ () =>
                                        saveToDo (item.id)}> Save </button>
                                </div> :
                                <div>
                                    <button onClick={ () => deleteToDo(item.id) }> Delete </button>
                                    
                                    <button onClick={ () => editToDo(item.id, item.title) }> Edit </button>
                                    
                                    <button onClick={ () => statusToDo(item.id) }> Done / Undone </button>
                                </div>
                        }
                        
                    </div>    
                ))
            }
        </div>
    )
}


export default ToDoList