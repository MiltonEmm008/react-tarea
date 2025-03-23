import React,{useState,useContext} from 'react'
import {taskContext} from '../context/TaskContext'

export default function TaskForm() {
    const [title, setTitle] = useState("")
    const [description,setDescription] = useState("")
    const {createTask} = useContext(taskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }
  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold text-white mb-3'>Crea Tu Tarea</h1>
            <input type="text" placeholder='Escribe tu tarea...' onChange={
                (e) => {
                    setTitle(e.target.value)
                }
            } value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>
            <textarea name="" id="" placeholder='Escribe la descripcion de tu tarea' onChange={
                (e) => {
                    setDescription(e.target.value)
                }
            } value={description} className='bg-slate-300 p-3 w-full mb-2'></textarea>
            <button type='submit' className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400'>Guardar</button>
        </form>
    </div>
  )
}
