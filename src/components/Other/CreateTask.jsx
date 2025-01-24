import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  //const [userData, setUserData] = useContext(AuthContext)
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [asignTo, setasignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setnewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    //console.log(taskTitle, taskDescription, taskDate, asignTo, category)
   setnewTask({taskTitle, taskDescription, taskDate, category, active:false, NewTask:true, failed:false, completed:false})
   
   const data = userData
   
   
   data.forEach(function(elem){
    if (asignTo == elem.firstName) {
      elem.tasks.push(newTask)
      elem.taskCounts.newTask = elem.taskCounts.newTask + 1
    }
  })
       setUserData(data)
       console.log(data)

        setTaskTitle('')
        setCategory('')
        setasignTo('')
        settaskDate('')
        settaskDescription('')

  }

  return (
    <div>
      <form onSubmit={(e) => {
                submitHandler(e)
            }}>
      <div className="grid grid-cols-2 gap-10 mt-7">
        {/* Left Side Form */}
        <div className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium mb-2">Task Title</label>
            <input
              value = {taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              value = {taskDate}
              onChange={(e)=>{
                settaskDate(e.target.value)
              }}
              type="date"
              placeholder="dd/mm/yyyy"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Assign to</label>
            <input
              value = {asignTo}
              onChange={(e)=>{
                setasignTo(e.target.value)
              }}
              type="text"
              placeholder="employee name"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              value = {category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              type="text"
              placeholder="design, dev, etc"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value = {taskDescription}
              onChange={(e)=>{
                settaskDescription(e.target.value)
              }}
              placeholder=""
              rows="9"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-2 rounded"
            ></textarea>
          </div>

          {/* Create Task Button */}
          <button type="submit"  className="bg-emerald-600 text-white text-lg font-medium px-6 py-3 rounded mt-4 w-full">
            Create Task
          </button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default CreateTask