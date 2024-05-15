'use client'

import { useState, useRef } from 'react'
import { useTodoStore } from "@/store/todo"
import { Input } from '../input'

export function Todo() {
  // const [todo, setTodo] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const todoContent = inputRef.current?.value

  console.log('todoContent', todoContent)
  console.log('inputRef.current', inputRef.current)

  // const { todos, create } = useTodoStore()

  // function handleTodo() {
  // }

  function AddTodo() {
    // if (todoContent) {
    //   create({ text: todoContent, done: false })
    // }
    console.log('todoContent', todoContent)
  }

  // console.log(todos)

  return (
    <div>
      <div className="flex w-full justify-center p-10 items-center h-full">
        <form>
          <div className="grid gap-2">
            <label htmlFor="todo">Digite uma tarefa</label>
            {/* <input
              id="todo"
              type="text"
              name="text"
              className="pd-2 border-cyan-300 border-2 w-full"
              placeholder="Digite uma tarefa"
              // onChange={(e) => setTodo(e.target.value)}
              // value={todo}
              ref={inputRef}
              // value={todoContent}
              // onFocus={inputRef.current.focus()}
            /> */}
            <Input ref={inputRef} />

            <button
              type="button"
              className="w-full bg-slate-900 text-white p-2"
              onClick={AddTodo}
            >
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col w-full justify-center p-10 items-center h-full">
        <h1>Todos</h1>
        {/* {
          Array.from(todos.values()).map((todo, index) => (
            <div key={index}>
              <p>{todo.text}</p>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}
