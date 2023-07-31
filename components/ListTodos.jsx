'use client'
import Todo from "./Todo";

const filters = [
    {
        name: 'All',
        code: 0
    },
    {
        name: 'Active',
        code: 1
    },
    {
        name: 'Completed',
        code: 2
    },
]

const classFilterButton = 'hover:text-slate-900 dark:hover:text-slate-200 hover:font-semibold duration-300 cursor-pointer'
const classActiveFilterButton = 'font-bold text-sky-600 cursor-pointer'

export default function ListTodos({ todos, changeStateTodo, handleRemoveTodo, changeFilter, clearCompletedTodos, filterCategory }) {
    return (
        <>
            {todos && todos.length > 0 && todos.map(todo => (
                <Todo key={todo.id} {...todo} changeStateTodo={changeStateTodo} RemoveTodo={handleRemoveTodo} />
            ))}

            {todos.length < 1 && <span className='px-4 py-2 w-full mx-auto box-border flex dark:text-slate-200 rounded-md'>No todo here. Create one !</span>}
            <div className="flex justify-between px-4 text-sm py-4 text-slate-500 flex-wrap">

                {/* Stats and filters */}
                <span className="md:basis-auto basis-1/2 order-1">{todos.length} items left</span>
                <div className="flex justify-center gap-4 basis-full md:basis-auto mt-5 md:mt-0 order-2 md:order-1">
                    {filters.map(filter => (
                        <button onClick={() => changeFilter(filter.code)} key={filter.code} className={filter.code === filterCategory ? classActiveFilterButton : classFilterButton}>
                            {filter.name}
                        </button>
                    ))
                    }
                </div>
                <button onClick={() => clearCompletedTodos()} className="md:basis-auto basis-1/2 order-1 text-right hover:text-slate-900 dark:hover:text-slate-200 hover:font-semibold duration-300 cursor-pointer">Clear Completed</button>
            </div>
        </>
    )
}
