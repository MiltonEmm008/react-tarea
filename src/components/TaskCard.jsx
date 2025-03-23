import React,{useContext} from 'react'
import {taskContext} from '../context/TaskContext'

export default function TaskCard({task}) {
  const {deleteTask} = useContext(taskContext)

  return (
    <div key={task.id} className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.titulo}</h1>
        <p className='text-gray-500 text-sm'>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)} className='bg-red-500 px-2 py-3 rounded-md mt-4 hover:bg-red-400'>
          Eliminar Tarea
        </button>
    </div>
  )
}
