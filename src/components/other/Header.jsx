import React, { useState, useEffect } from 'react'
import { LogOut } from 'lucide-react'

const Header = (props) => {
  const [username, setUsername] = useState('Admin')

  useEffect(() => {
    if (props.data) {
      setUsername(props.data.firstName)
    }
  }, [props.data])

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between mb-8'>
        <div>
            <h1 className='text-lg font-medium text-gray-400'>Hello,</h1>
            <h2 className='text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-aura-primary to-aura-secondary tracking-tight'>
                {username} 👋
            </h2>
        </div>
        <button 
          onClick={logOutUser} 
          className='flex items-center gap-2 bg-aura-card border border-aura-border hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50 text-gray-300 px-5 py-2.5 rounded-xl transition-all font-medium text-sm'
        >
            <LogOut size={16} />
            <span>Log Out</span>
        </button>
    </div>
  )
}

export default Header