import React, { HtmlHTMLAttributes } from 'react';
import { ImBin } from 'react-icons/im'
import { AiOutlineEdit } from 'react-icons/ai'

export const TodoList: React.FC = () =>{
    const [items, setItems] = React.useState(Array<{id: number, name: string, done: boolean}>)
    const [content, setContent] = React.useState(Array<{id: number, name: string, done: boolean}>)
    const [page, setPage] = React.useState(1)
    const [pageList, setPageList] = React.useState(Array<number>)
    const inputTask = React.useRef<HTMLInputElement>(null)
    const editTaskName = React.useRef<HTMLInputElement>(null)
    const editTaskDone = React.useRef<HTMLInputElement>(null)
    const [isVisible, setVisible] = React.useState(false);
    const [currentEditing, setCurrentEditing] = React.useState(0);
    const itemPerPage = 5

    const handleAddTask = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if(!inputTask.current) return;
        setItems( prev => [...prev, {
            id: prev.length > 0 ? prev[prev.length-1].id +1 : 1,
            name: inputTask.current!.value,
            done: false
        }])
    }

    const handleRemove = (id: number) =>{
        setItems(items.filter((item)=> item.id !== id))
        if(content.length == 1){
            setPage(page > 1 ? page-1 : 1 )
        }  //go to prev page
    }

    const handleCheck = (id: number) =>{
        const tempItems = [...items]
        const target = tempItems.find(item => item.id == id)
        if(target) target.done = !target?.done
        setItems(tempItems)
    }
    
    const handleEdit = (id: number) =>{
        setVisible(true)
        setCurrentEditing(id)
    }

    const handleSumbitEditing = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const tempItems = items
        let target = tempItems.find((item)=> item.id == currentEditing)
        if(editTaskName.current && editTaskDone.current && target){
            target.name = editTaskName.current?.value
            target.done = editTaskDone.current?.checked
        }
        setItems(tempItems)
        setVisible(!isVisible)
    }
    const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setPage(Number(event.target.value))
    }
    React.useEffect(() => {
        let localStore = localStorage.getItem("item")
        if (localStore){
            setItems(JSON.parse(localStore))
        }
    }, [])

    React.useEffect(()=>{
        localStorage.setItem("item", JSON.stringify(items))
    }, [items])

    React.useEffect(()=>{
        setPageList(Array.from({length: Math.ceil(items.length/5)}, (v, k) => k+1))
        let start = page*itemPerPage - itemPerPage
        let end = page*itemPerPage - 1
        let newContent = items.filter((item, index) => (index >= start && index <= end))
        setContent(newContent)
    },[page, items])
    // items-center makes word horizontally centered
    return (
            <div className='text-white max-w-[800px] w-full h-[90%] text-center flex flex-col justify-center mx-auto'>
                <form className='flex justify-between' onSubmit={handleAddTask}>
                    <input id="inputtask" required ref={inputTask} className='p-2 w-[100%] text-black font-bold rounded my-2 border-2 border-zinc-600' placeholder='Enter your task here...'  type="text" />
                    <button className='rounded p-2 m-2 bg-green-500' type='submit'> Add Task </button>
                </form>
                {
                    content?.map((item)=>{
                        return(
                            <div key={item.id} className={` ${item.done ? 'bg-green-400' : '' }  rounded-md overflow-hidden shadow-xl border-2 border-zinc-600`}>
                                <div className="flex justify-between items-center p-2 mx-2"> 
                                    <input id={`checkbox${item.id}`} onChange={()=>{}} type={'checkbox'} checked={items.find((x)=> x.id == item.id)?.done} onClick={()=>handleCheck(item.id)}/>
                                    <div className="w-full font-bold text-lg">{item.name}</div>
                                    <AiOutlineEdit  size={25} onClick={()=>handleEdit(item.id)} />
                                    <ImBin  size={25} className='mx-1' onClick={()=>handleRemove(item.id)}/>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='text-left font-bold text-lg mt-1'>{items.filter(todo => !todo.done).length} tasks left to do</div>
                <div className='flex justify-between'>
                    <div>
                        <button onClick={()=>setPage(page-1)} className={page > 1 ? 'p-2 rounded hover:bg-gray-700' : 'invisible'}>Previous page</button>
                    </div>
                    <div>
                        <select value={page} onChange={handlePageChange} className='p-2 text-black rounded'>
                            {
                                pageList.map((p)=>{
                                    return(
                                        <option value={p} >{`Page: ${p}`}</option >
                                    )
                                })
                            }
                        </select >
                    </div>
                    <div>
                        <button onClick={()=>setPage(page + 1)} className={page < pageList.length ? 'p-2 rounded hover:bg-gray-700' : 'invisible'}>Next page</button>
                    </div>
                </div>
                {isVisible ? <div id="popup-form" className={("fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50")}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-gray-700 text-lg font-medium mb-4">Edit Task</h2>
                        <form onSubmit={handleSumbitEditing}> 
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" >Task Name:</label>
                                <input ref={editTaskName} defaultValue={items.filter((item)=>item.id== currentEditing)[0].name} className=" text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="editTaskName" type="text" required/>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <label className="block text-gray-700 font-bold m-2" >Done:</label>
                                <input ref={editTaskDone} id='editTaskDone' type={'checkbox'} defaultChecked={items.filter((item)=>item.id== currentEditing)[0].done} />
                            </div>
                            <div className='flex justify-between'>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Submit</button>
                                <button id="close-btn" className=" bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 "onClick={()=>{setVisible(!isVisible)}}>Close</button>
                            </div>
                        </form>
                        
                    </div>
                </div> : ''}
            </div>
    )
}
export default TodoList;

