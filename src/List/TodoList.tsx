import React from 'react'
import TodoItem from '../Item/TodoItem'
import { MyTodo } from '../Type/types'

interface TodoListProps {
  items: MyTodo[]
  toggleDoneItem: (id: number) => void
  removeItem: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  toggleDoneItem,
  removeItem,
}) => {
  const vasibleItems = items.map((todo) => (
    <TodoItem
      key={todo.id}
      toggleDoneItem={toggleDoneItem}
      removeItem={removeItem}
      {...todo}
    />
  ))

  return <div> {vasibleItems} </div>
}
export default TodoList
