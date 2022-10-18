import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "test",
      "other": "no-show",
      "day": "monday",
      "reminder": true
    },
    {
      "text": "Test4",
      "day": "Wednesday",
      "reminder": false,
      "id": 3
    },
    {
      "text": "Task6",
      "day": "Thursday",
      "reminder": true,
      "id": 4
    } ]
  )
    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      console.log(id)
    }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/> : "No tasks to display"}
    </div>
  );
}

export default App;



// import {useEffect, useState} from 'react'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'
// import About from './components/About'
// import TaskDetails from './components/TaskDetails'

// const App = () => {
//   const [showAddTask, setShowAddTask] = useState(false)
//   const [tasks, setTasks] =useState([])

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks()
//       setTasks(tasksFromServer)
//     }
//     getTasks()
//   }, [])

//   const fetchTasks = async () => {
//     const res = await fetch('http://localhost:8500/tasks')
//     const data = await res.json()
//     return data
//   }

//   const fetchTask = async (id) => {
//     const res = await fetch(`http://localhost:8500/tasks/${id}`)
//     const data = await res.json()
//     return data
//   }

// const addTask = async (task) => {

//   const res = await fetch('http://localhost:8500/tasks', {method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify(task)
//   })

//   const data = await res.json()

//   setTasks([...tasks, data])

//   // const id = Math.floor(Math.random() * 1000) +1
//   // const newTask = {id, ...task}
//   // setTasks([...tasks, newTask])
// }

// const deleteTask = async (id) => {
//   await fetch(`http://localhost:8500/tasks/${id}`, {
//     method: 'DELETE'
//   })

//   setTasks(tasks.filter((task) => task.id !== id))
// }

// const toggleReminder = async (id) => {
//   const taskToToggle = await fetchTask(id)
//   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

//   const res = await fetch(`http://localhost:8500/tasks/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(updTask),
//   })

//   const data = await res.json()

//   setTasks(
//     tasks.map((task) =>
//       task.id === id ? { ...task, reminder: data.reminder } : task
//     )
//   )
// }

//   return (
//     <Router>
//     <div className = 'container'>
//       <Header onAdd={() =>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
//       <Routes>
//       <Route
//         path='/'
//         element = {
//           <>
//       {showAddTask && <AddTask onAdd={addTask}/>}
//       {tasks.length > 0 ? (
//         <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
//         )  : (
//           'No Tasks to Display'
//         )}
//           </>
//         }
//         />
//       <Route path='/about' element={<About/>}/>
//       <Route path='/task/:id' element={<TaskDetails/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//     </Router>
//   )
// }

// export default App