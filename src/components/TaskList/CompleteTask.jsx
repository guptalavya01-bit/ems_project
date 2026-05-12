import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[320px] p-6 glass-card border-l-4 border-l-green-500 rounded-2xl flex flex-col justify-between group hover:shadow-green-500/10 transition-all'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='bg-green-500/20 text-green-500 text-xs font-semibold px-3 py-1.5 rounded-md'>{data.category}</span>
                    <span className='text-sm text-gray-400 font-medium'>{data.taskDate}</span>
                </div>
                <h2 className='text-xl font-display font-bold text-white mb-2'>{data.taskTitle}</h2>
                <p className='text-sm text-gray-400 leading-relaxed'>
                    {data.taskDescription}
                </p>
            </div>
            <div className='mt-6'>
                <button className='w-full bg-green-500/10 text-green-500 rounded-xl font-semibold py-2.5 text-sm cursor-default border border-green-500/30'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask