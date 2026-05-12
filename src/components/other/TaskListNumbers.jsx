import React from 'react'
import { CheckCircle2, Clock, XCircle, FilePlus2 } from 'lucide-react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
        
        <div className='glass-card rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform'>
            <div className="absolute -right-4 -top-4 text-aura-primary/10 group-hover:scale-110 transition-transform">
                <FilePlus2 size={120} />
            </div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 bg-aura-primary/20 rounded-lg text-aura-primary'>
                        <FilePlus2 size={24} />
                    </div>
                    <h3 className='text-lg font-medium text-gray-300'>New Tasks</h3>
                </div>
                <h2 className='text-4xl font-display font-bold text-white mt-4'>{data.taskCounts.newTask}</h2>
            </div>
        </div>

        <div className='glass-card rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform border-l-4 border-l-green-500'>
            <div className="absolute -right-4 -top-4 text-green-500/10 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={120} />
            </div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 bg-green-500/20 rounded-lg text-green-500'>
                        <CheckCircle2 size={24} />
                    </div>
                    <h3 className='text-lg font-medium text-gray-300'>Completed</h3>
                </div>
                <h2 className='text-4xl font-display font-bold text-white mt-4'>{data.taskCounts.completed}</h2>
            </div>
        </div>

        <div className='glass-card rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform border-l-4 border-l-yellow-500'>
            <div className="absolute -right-4 -top-4 text-yellow-500/10 group-hover:scale-110 transition-transform">
                <Clock size={120} />
            </div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 bg-yellow-500/20 rounded-lg text-yellow-500'>
                        <Clock size={24} />
                    </div>
                    <h3 className='text-lg font-medium text-gray-300'>Active</h3>
                </div>
                <h2 className='text-4xl font-display font-bold text-white mt-4'>{data.taskCounts.active}</h2>
            </div>
        </div>

        <div className='glass-card rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform border-l-4 border-l-red-500'>
            <div className="absolute -right-4 -top-4 text-red-500/10 group-hover:scale-110 transition-transform">
                <XCircle size={120} />
            </div>
            <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-2'>
                    <div className='p-2 bg-red-500/20 rounded-lg text-red-500'>
                        <XCircle size={24} />
                    </div>
                    <h3 className='text-lg font-medium text-gray-300'>Failed</h3>
                </div>
                <h2 className='text-4xl font-display font-bold text-white mt-4'>{data.taskCounts.failed}</h2>
            </div>
        </div>
        
    </div>
  )
}

export default TaskListNumbers