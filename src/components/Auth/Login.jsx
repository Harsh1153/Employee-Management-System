import React, { useState } from 'react';


const Login = ({handleLogin}) => {

    
    // parent ke andar se data pass yaha kiya and call kiya 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='border-2 p-20 border-emerald-600 rounded-xl'>
            <form
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>

                <input 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type='email' placeholder='Enter your Email'></input>
                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3' type='password' placeholder='Enter Password'></input>

                <button className='text-white border-none placeholder=white border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full mt-3'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login