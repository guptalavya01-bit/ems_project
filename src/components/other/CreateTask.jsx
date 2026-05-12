import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { PlusCircle } from 'lucide-react'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const newTaskObj = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
        
        const data = [...userData]

        data.forEach(function (elem) {
            if (asignTo === elem.firstName) {
                elem.tasks.push(newTaskObj)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        
        // Ensure localStorage is updated since AuthProvider sets initial state from it
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='glass-card rounded-2xl p-6 h-full'>
            <div className="mb-6">
                <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                    <PlusCircle size={20} className="text-aura-primary" />
                    Create New Task
                </h2>
                <p className="text-sm text-gray-400 mt-1">Assign a new task to an employee.</p>
            </div>
            
            <form onSubmit={submitHandler} className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium text-gray-300'>Task Title</label>
                    <input
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className='glass-input text-sm py-2.5 px-4 w-full rounded-xl placeholder:text-gray-500' 
                        type="text" 
                        placeholder='e.g., UI Design update'
                        required
                    />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-300'>Due Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='glass-input text-sm py-2.5 px-4 w-full rounded-xl text-gray-300' 
                            type="date" 
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-300'>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='glass-input text-sm py-2.5 px-4 w-full rounded-xl placeholder:text-gray-500' 
                            type="text" 
                            placeholder='e.g., Design' 
                            required
                        />
                    </div>
                </div>
                
                <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium text-gray-300'>Assign To</label>
                    <input
                        value={asignTo}
                        onChange={(e) => setAsignTo(e.target.value)}
                        className='glass-input text-sm py-2.5 px-4 w-full rounded-xl placeholder:text-gray-500' 
                        type="text" 
                        placeholder='Employee First Name' 
                        required
                    />
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium text-gray-300'>Description</label>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)} 
                        className='glass-input w-full h-32 text-sm py-3 px-4 rounded-xl resize-none placeholder:text-gray-500' 
                        placeholder='Detailed task description...'
                        required
                    ></textarea>
                </div>
                
                <button className='bg-aura-primary hover:bg-aura-primary/90 text-white font-semibold py-3 px-5 rounded-xl text-sm mt-2 transition-all shadow-lg shadow-aura-primary/20 w-full'>
                    Publish Task
                </button>
            </form>
        </div>
    )
}

export default CreateTask