import React, {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../data/tasks'

export const taskContext = createContext()
export function TaskContextProvider(props) {
    const [tasks, setTask] = useState([])

    function createTask(task){
        setTask([...tasks,{
          titulo:task.title,
          id:tasks.length+1,
          descripcion:task.description
        }])
      }

      function deleteTask(taskId){
        setTask(tasks.filter(task => task.id !== taskId))
      }

      useEffect(() => {
        setTask(data)
    }, [])
    return (
        <taskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </taskContext.Provider>
    )
}
