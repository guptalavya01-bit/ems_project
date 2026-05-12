import React, { useState } from 'react'
import { LogIn, Mail, Lock } from 'lucide-react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center font-sans'>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-aura-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aura-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>
        
        <div className='glass-card rounded-2xl p-10 md:p-14 w-full max-w-md mx-4 relative z-10'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-display font-bold mb-2 tracking-tight'>Welcome Back</h1>
                <p className='text-gray-400 text-sm'>Enter your credentials to access the dashboard</p>
            </div>
            
            <form 
              onSubmit={submitHandler}
              className='flex flex-col gap-5'
            >
                <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                        <Mail size={18} className='text-gray-400' />
                    </div>
                    <input 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required 
                      className='glass-input w-full font-medium text-sm py-3.5 pl-11 pr-4 rounded-xl placeholder:text-gray-500' 
                      type="email" 
                      placeholder='Email address' 
                    />
                </div>
                
                <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                        <Lock size={18} className='text-gray-400' />
                    </div>
                    <input
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required 
                      className='glass-input w-full font-medium text-sm py-3.5 pl-11 pr-4 rounded-xl placeholder:text-gray-500' 
                      type="password" 
                      placeholder='Password' 
                    />
                </div>
                
                <button className='mt-4 flex items-center justify-center gap-2 text-white border-none outline-none hover:bg-aura-primary/90 hover:shadow-lg hover:shadow-aura-primary/30 transition-all font-semibold bg-aura-primary text-sm py-3.5 px-8 w-full rounded-xl'>
                    <span>Sign In</span>
                    <LogIn size={18} />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login