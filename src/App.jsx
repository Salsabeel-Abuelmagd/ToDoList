import { useState , useRef } from 'react'

import './App.css'

function App() {

  const[toDoList,setToDoList]=useState([])
  const inputRef = useRef()

  const handleBtnClick = () =>{
    const item = inputRef.current.value;
    const newItem = {completed : false , item}
    setToDoList([...toDoList,newItem])
    inputRef.current.value=""
  }

  const handleItemDone=(index)=>{
    const newToDoList = [...toDoList]
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDoList(newToDoList)

  }
  const handleDeleteItem = (index) =>{
    const newToDoList = [...toDoList]
    newToDoList.splice(index,1)
    setToDoList(newToDoList)
  }

  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='p-10 border-2 border-blue-300 rounded-md'>
    <h1 className="text-4xl font-bold py-4">
    To Do List</h1>
    <div className='py-10'>
    <ul>
      {toDoList.map(({ item , completed },index) => {
          return(
          <div className='flex justify-between bg-blue-100 relative mb-2'
          key={index}>
          <li 
          className={`${completed?'line-through':''} list-disc cursor-pointer font-semibold`} 
        
          onClick={()=>handleItemDone(index)}
          >{item}</li>
          <span className='cursor-pointer font-bold absolute bottom-3 right-0 rounded-full bg-blue-500 px-1 '
          onClick={() => handleDeleteItem(index)}>X</span>
          </div>
        );
      })}
      </ul>
    <input type="text" ref={inputRef} placeholder='Enter Item...'
    className='outline-none'
    />
    <button onClick={handleBtnClick}
    className='font-semibold text-lg  py-1 px-5 rounded-full bg-blue-300'
    >Add</button>
    </div>
   
    </div>
    </div>

  )
}

export default App
