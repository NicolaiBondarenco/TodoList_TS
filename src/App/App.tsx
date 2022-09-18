import React, { useState, useRef, useEffect } from 'react'
import TodoList from '../List/TodoList'
import { MyTodo } from '../Type/types'
import './App.css'

const App: React.FC = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<MyTodo[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ])
      setValue('')
    }
  }

  const removeItem = (id: number): void => {
    setTodos(todos.filter((el) => el.id !== id))
  }

  const toggleDoneItem = (id: number): void => {
    setTodos(
      todos.map((el) => {
        if (el.id !== id) return el
        return {
          ...el,
          complete: !el.complete,
        }
      }),
    )
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div
      className="App"
      style={{
        fontFamily: 'Roboto',
      }}
    >
      <h1>Todo List</h1>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={addTodo} style={{ fontFamily: 'Roboto' }}>
          Add Item
        </button>
      </div>
      <TodoList
        items={todos}
        removeItem={removeItem}
        toggleDoneItem={toggleDoneItem}
      />
    </div>
  )
}

export default App
