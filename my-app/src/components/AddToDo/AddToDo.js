import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import s from './AddToDo.module.css'


function AddToDo ({todo, setToDo}) {

    const [value, setValue] = useState ('')

    function saveToDo () {
        setToDo (
            [...todo, {
                id: uuidv4(),
                title: value,
                status: false
            }]
        )
        setValue ('')
    }

    return (
        <div>
            <input placeholder="Enter task..." 
            value= {value} onChange = { (e) => 
            setValue (e.target.value) }/>
            <button className = {s.button} onClick = {saveToDo}> Save </button>
        </div>
    )
}
export default AddToDo
