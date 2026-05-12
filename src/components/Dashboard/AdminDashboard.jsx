import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full p-6 md:p-10 font-sans'>
            <Header changeUser={props.changeUser} />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
                <div className="xl:col-span-1 h-full">
                    <CreateTask />
                </div>
                <div className="xl:col-span-2 h-full">
                    <AllTask />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard