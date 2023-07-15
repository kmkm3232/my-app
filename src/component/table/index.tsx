import  Axios from 'axios';
import classnames from 'classnames';
import React from 'react';
import '../../style.css';
export const Table: React.FC = (props) => {

    const firstname = React.useRef<HTMLInputElement>(null);
    const lastname = React.useRef<HTMLInputElement>(null);
    const age = React.useRef<HTMLInputElement>(null);

    const [isVisible, setVisible] = React.useState(false);

    const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        if (!firstname.current || !lastname.current || !age.current) return;
        Axios.post('http://localhost:3001/user/test',{
            firstName: firstname.current.value,
            lastName: lastname.current.value,
            age: age.current.value
        }).then((res: any)=>{
            console.log(res)
        })
    }
    return (
        <div className="text-white">
            <div className='max-w-[800px] w-full mt-[-96px] h-screen text-center flex flex-col justify-center mx-auto'>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button id="popup-btn" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{setVisible(!isVisible)}}>Open Form</button>
                {isVisible ? <div id="popup-form" className={classnames("fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50")}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-gray-700 text-lg font-medium mb-4">Popup Form</h2>
                        <form onSubmit={handleOnsubmit}> 
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >First Name:</label>
                            <input ref={firstname} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >Last Name:</label>
                            <input ref={lastname} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" required/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >Age:</label>
                            <input ref={age} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" required/>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">Submit</button>
                        </form>
                        <button id="close-btn" className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 "onClick={()=>{setVisible(!isVisible)}}>Close</button>
                    </div>
                </div> : ''}
            </div>
        </div>
    );
  };
  
  export default Table;
  