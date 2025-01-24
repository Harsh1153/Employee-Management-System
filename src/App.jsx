import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/login.jsx'
import { EmployeeDashboard } from './components/Dashboad/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboad/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx';


const App = () => {

    const [user, setuser] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const [userData, setUserData] = useContext(AuthContext)

    useEffect(()=>{
      const loggedInUser = localStorage.getItem('loogedInUser')

      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setuser(userData.role)
        setLoggedInUserData(userData.data)
      }
    }, [])
    
    
    const handleLogin =(email,password) =>{
        if(email == 'admin@me.com' && password == 123){
            setuser('admin')
            localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
        }else if(userData) {
            const employee = userData.find((e)=>email == e.email && e.password == password)
            if (employee) {
            setuser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee', data:employee }))
            }
        }else{
            alert('Invalid credentials.');
        }
    }

   

  return (
   <>
   {!user ? <Login handleLogin={handleLogin} />: ''}
   {user == 'admin' ? <AdminDashboard changeUser={setuser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData} /> : null) }
   {/*<EmployeeDashboard/>*/}
   {/*<AdminDashboard/>*/}

   </> 
  )
}

export default App