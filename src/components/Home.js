import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [users, setUsers] = useState([]);

    function loadUsers() {
        axios.get("http://localhost:3000/users").then((res) => {
            setUsers(res.data);
        });
    }

    useEffect(() => {
        loadUsers();
    }, []);

    function deleteUser(id) {
        axios.delete(`http://localhost:3000/users/${id}`).then(loadUsers());
    }

    return (
        <>
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
                <h1 className="text-4xl font-bold font-sans">DATA TABLE</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="font-sans font-large text-white px-6 py-4"
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-sans font-lg text-white px-6 py-4"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-sans font-lg text-white px-6 py-4"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-sans font-lg text-white px-6 py-4"
                                            >
                                                Phone
                                            </th>
                                            <th
                                                scope="col"
                                                className="font-sans text-l font-lg text-white px-6 py-4"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-black border-b-2">
                                        {users.map((data, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b-2 border-black"
                                            >
                                                <td className="font-sans text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {data.id}
                                                </td>
                                                <td className="font-sans text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {data.name}
                                                </td>
                                                <td className="font-sans text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {data.email}
                                                </td>
                                                <td className="font-sans text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                    {data.phone}
                                                </td>
                                                <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                                                    <Link
                                                        to={`/users/${data.id}`}
                                                        className="border-2 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:border-2 font-sans"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        to={`/edit-user/${data.id}`}
                                                        className="border-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2 font-sans"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        onClick={() => deleteUser(data.id)}
                                                        to={"#"}
                                                        className="border-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-2 font-sans"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to={"/add-user"} className="text-xl font-sans text-teal-600 border-teal-600 border-2 hover:bg-teal-600
            hover:border-2 hover:border-teal-200 hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold py-2 px-2">Add User</Link>
            </div>
        </>
    );
}

export default Home;