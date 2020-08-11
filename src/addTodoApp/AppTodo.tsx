import React, { useState, ChangeEvent, FormEvent } from 'react'
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import './AppTodo.css'

// interface Todo {
//     text : string,
//   }
// const initialTodos: Array<Todo> = [
//     {
//       text: "Hello",
//     },
//     {
//       text: "World!!!!!",
//     }
//   ];

const AppTodo: React.FC = () => {   
     const [todos, setTodos] = useState<string[]>(['hello','world!!!!'])
    const [input, setInput] = useState<string>('')
    //const [input1,setInput1]=useState<string>('')
    //console.log(input)

    const changeHandler = (e: any) => {
        setInput(e.target.value)
    }
    //this will fire off when button is clicked
    const addTodo = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('button clicked')
        setTodos([...todos, input])
        //keepwhatever is already present in the array adding on new todos-->input
        setInput('')
    }

    return (
        <div className='appTodo'>
            <form>
                <FormControl>
                    <InputLabel>enter a todo</InputLabel>
                    <Input value={input} placeholder='Enter here' onChange={changeHandler}></Input>
                </FormControl>
                {/* //using material ui above
                <input
                    placeholder='Enter here'
                    value={input}
                    onChange={changeHandler}
                />
                <button type='submit' onClick={addTodo}>Click to add</button>  */}
                <Button disabled={!input} type='submit'  onClick={addTodo}  variant="contained" color="primary">
                    Click To add
                </Button>
            </form>

            {todos.map(todo => (
                 <li>{todo}</li>
               // <Todo todotext={todo} />
            ))}
        </div>
    )
}
export default AppTodo