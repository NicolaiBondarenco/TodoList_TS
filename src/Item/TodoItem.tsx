import React from 'react'
import './TodoItem.css'
import { MyTodo } from '../Type/types'

interface Item extends MyTodo {
  removeItem: (id: number) => void
  toggleDoneItem: (id: number) => void
}

const TodoItem: React.FC<Item> = (props) => {
  const { id, title, complete, removeItem, toggleDoneItem } = props

  return (
    <div className="todoItem">
      <input
        className="todoItem__input"
        type="checkbox"
        checked={complete}
        onChange={() => toggleDoneItem(id)}
      />
      <p className="todoItem__text"> {title} </p>
      <button className="todoItem__delete" onClick={() => removeItem(id)}>
        x
      </button>
    </div>
  )
}
export default TodoItem
