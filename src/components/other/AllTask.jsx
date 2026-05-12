import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

  return (
    <div className='glass-card p-6 rounded-2xl h-full flex flex-col'>
        <h2 className='text-xl font-display font-bold text-white mb-6'>Employee Overview</h2>
        
        <div className='bg-aura-dark/40 mb-3 py-3 px-4 flex justify-between rounded-xl border border-aura-border text-xs uppercase tracking-wider text-gray-400'>
            <h2 className='font-medium w-1/5'>Employee</h2>
            <h3 className='font-medium w-1/5 text-center'>New</h3>
            <h5 className='font-medium w-1/5 text-center'>Active</h5>
            <h5 className='font-medium w-1/5 text-center'>Completed</h5>
            <h5 className='font-medium w-1/5 text-center'>Failed</h5>
        </div>
        
        <div className='overflow-auto flex-1 pr-2 space-y-2'>
        {userData.map(function(elem,idx){
            return (
                <div key={idx} className='bg-aura-dark/20 border border-aura-border/50 py-3 px-4 flex justify-between items-center rounded-xl hover:bg-aura-dark/60 transition-colors text-sm'>
                    <h2 className='font-medium w-1/5 text-white flex items-center gap-2'>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-aura-primary to-aura-secondary flex items-center justify-center text-xs font-bold">
                            {elem.firstName.charAt(0)}
                        </div>
                        {elem.firstName}
                    </h2>
                    <h3 className='font-medium w-1/5 text-center text-blue-400'>{elem.taskCounts.newTask}</h3>
                    <h5 className='font-medium w-1/5 text-center text-yellow-400'>{elem.taskCounts.active}</h5>
                    <h5 className='font-medium w-1/5 text-center text-green-400'>{elem.taskCounts.completed}</h5>
                    <h5 className='font-medium w-1/5 text-center text-red-400'>{elem.taskCounts.failed}</h5>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default AllTask