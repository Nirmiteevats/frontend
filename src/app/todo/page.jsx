'use client';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const Todo = () => {

    // const [taskList, setTaskList] = useState([
    //     {text: 'Kapde Dhulna', Completed: false},
    //     {text: 'Dhoood Lana', Completed: false},
    //     {text: 'Learn React', Completed: false},
    // ]);

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        if (e.code==='Enter'){
            console.log(e.target.value);

            const newTask = { text : e.target.value, completed: false};

            setTaskList([newTask, ...taskList]);

            e.target.value='';
        }
    }

    const deleteTask = (index) => {
        const temp= taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    };

    //let count = 0;
    //const [count, setCount] = useState(0);

  return (
    
    <div>

        {/* <h1 className='text-3xl'>
            count : {count}
        </h1>

        <button onClick={() => {setCount(count +1); console.log(count);}} className='border p-2 rounded-lg bg-blue-500 text-white'>

            Add Count
            
        </button>
       */}

       <div className='bg-grey-100 min-h-screen py-10'>
        <h1 className='border p-2 text-center text-3xl font-bold underline my-6'>ToDo App</h1>
          <div className='container mx-auto'>
            <div className='bg-white shadow-lg rounded-xl'>
                <div className='p-5'>
                    <input type="text" 
                    className='border p-3 w-full'
                    onKeyDown={addNewTask}
                     />
                </div>
                <div className='border-t p-5'>

                    {

                        taskList.length === 0? (
                             <p className='font-bold text-gray-400 text-center'>
                                 No Tasks To Show Here 💃🏻
                            </p>
                        ) : (
                            taskList.map((task, index) =>{
                                return <div key={index} 
                                className='border p-4 rounded-md mb-5 flex justify-between items-center'>
                                    <div className='flex gap-3 w-1/2'>
                                        <input type="checkbox" 
                                        checked={task.completed}
                                        onChange={(e) => {
                                            const temp =taskList;
                                            temp[index].completed =e.target.checked;
                                            setTaskList([...temp]);
                                        }}/>

                                        <p>{task.text}</p>
                                    </div>
                                    {
                                        task.completed?(
                                            <p className='text-white bg-green-600 px-2 rounded-full'>Completed</p>
                                        ):(
                                            <p className='text-white bg-yellow-600 px-2 rounded-full'>Pending</p>
                                        )
                                    }
                                    <button onClick={() => {deleteTask(index)}} className='bg-red-500 text-white p-2 rounded'>
                                        <Trash2 />
                                    </button>
                                </div>
                            })
                        )
                        
                    }


                   
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Todo;