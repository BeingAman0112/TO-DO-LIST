"use client"
import React, { useState } from 'react'

const page = () => {
  const [title , settitle] = useState("")
  const [disc , setdisc] = useState("")
  const [mainTask , setMMainTask] = useState([])
  

  const submitHandler =(e)=>{
      e.preventDefault();
      setMMainTask([...mainTask , {title , disc }]);
      settitle("");
      setdisc("");
  };

  const deleteHandler=(i)=>{
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setMMainTask(copyTask)
  }

  let renderTask = <h2 className='border-4 pt-4 pb-4 border-black text-2xl text-center font-bold bg-yellow-100'>No Task Available</h2>

  if(mainTask.length>0){

  renderTask = mainTask.map((t,i)=>{
    return ( 
    <li key={i} className=' mb-5 items-center justify-between flex border px-4 py-4 border-black  bg-yellow-100'>
      <div className='flex items-center justify-between mb-2 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold'>{t.disc}</h6>
    </div>
    <button
    onClick ={()=>{
      deleteHandler(i)
    }}
    className='bg-red-700 text-white px-4 py-2 rounded font-bold hover:bg-red-600 active:bg-red-400'>Delete</button>
    </li>
    );
  });
}
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center '>Aman to-do List</h1>
    
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-2
      px-4 py-2'
      placeholder='Enter task here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-2
      px-4 py-2'
      placeholder='Enter Description here'
      value={disc}
      onChange={(e)=>{
        setdisc(e.target.value)
      }}/>

      <button className='px-4 py-3 text-2xl m-5 bg-black hover:bg-gray-600 text-white rounded-md active:bg-gray-400'> Add task</button>
    </form>
    <hr/>
    <div className="p-8 bg-slate-200">
      <ul>{renderTask}</ul>
    </div>   

    </>
  )
}

export default page
