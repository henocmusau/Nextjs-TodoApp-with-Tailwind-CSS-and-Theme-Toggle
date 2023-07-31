'use client';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ListTodos from '@/components/ListTodos'
import ThemeButton from '@/components/ThemeButton';

export default function Home() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(0)
  const inputRef = useRef()

  function createTodo(e) {
    e.preventDefault()

    if (inputRef.current.value.trim() < 1) return

    const newTodo = {
      id: uuidv4(),
      title: inputRef.current.value,
      isCompleted: false
    }

    setTodos([newTodo, ...todos])

    inputRef.current.value = ''
    setFilter(0)
  }

  function changeStateTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo
      }))
  }

  function removeTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter(todo => todo.id !== id))
    console.log('Removed')
  }

  function changeFilter(id) {
    setFilter(id)
  }

  function filterTodos() {
    switch (filter) {
      case 0:
        return todos
      case 1:
        return todos.filter(todo => !todo.isCompleted)
      case 2:
        return todos.filter(todo => todo.isCompleted)
      default:
        return todos
    }
  }

  const filteredTodos = filterTodos()

  function clearCompletedTodos() {
    setTodos(todos.filter(todo => !todo.isCompleted))
    changeFilter(0)
  }

  return (
    <main
      className='bg-lightImage dark:bg-darkImage flex w-full bg-cover bg-no-repeat bg-top flex-col items-center justify-between'
    >
      <section
        className='min-h-[300px] px-2 md:px-0 w-full md:w-[500px] pt-20 relative'
      >
        <div className='flex justify-between items-center mx-2 md:mx-0 text-white mb-10'>
          <h1 className='text-4xl font-semibold uppercase tracking-[0.3em] '>Todo</h1>
          <ThemeButton />
        </div>
        <form className='w-full' method='POST' onSubmit={createTodo}>
          <input
            ref={inputRef}
            type='text'
            placeholder='Create a new todo...'
            name='todo'
            className='w-full rounded p-4 text-lg dark:bg-bgDarkSecondary dark:text-slate-200'
          />
        </form>
        <div className='w-full relative'>
          <section
            className="md:w-[500px] md:mx-0 absolute left-0 top-0 mt-5 bg-slate-100 dark:bg-bgDarkSecondary rounded-lg divide-y dark:divide-gray-700 shadow-lg"
          >

            <ListTodos
              todos={filteredTodos}
              changeStateTodo={changeStateTodo}
              handleRemoveTodo={removeTodo}
              filterTodos={filteredTodos}
              changeFilter={changeFilter}
              clearCompletedTodos={clearCompletedTodos}
              filterCategory={filter}
            />

          </section>
        </div>

      </section>
    </main>
  )
}
