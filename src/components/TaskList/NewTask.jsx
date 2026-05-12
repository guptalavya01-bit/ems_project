import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[320px] p-6 glass-card border-l-4 border-l-aura-primary rounded-2xl flex flex-col justify-between group hover:shadow-aura-primary/10 transition-all'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='bg-aura-primary/20 text-aura-primary text-xs font-semibold px-3 py-1.5 rounded-md'>{data.category}</span>
                    <span className='text-sm text-gray-400 font-medium'>{data.taskDate}</span>
                </div>
                <h2 className='text-xl font-display font-bold text-white mb-2'>{data.taskTitle}</h2>
                <p className='text-sm text-gray-400 leading-relaxed'>
                    {data.taskDescription}
                </p>
            </div>
            <div className='mt-6'>
                <button className='w-full bg-aura-primary text-white hover:bg-aura-primary/90 rounded-xl font-semibold py-2.5 text-sm transition-all shadow-lg shadow-aura-primary/20'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask