import React from 'react'

const Header = (props) => {
  
  //const firstName = data?.firstName || "User";

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
   // window.location.reload();
  }



  return (
    <div className='flex item-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>username 👋</span></h1>

        <button onClick={logOutUser} className='bg-red-600 text-base text-white font-medium px-5 py-2 rounded-sm'>Log Out</button>

    </div>
  )
}

export default Header