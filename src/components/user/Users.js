import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
    const { id } = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`).then((res) => {
            setUser(res.data);
        });
        // eslint-disable-next-line
    }, []);

    console.log(user);
    return (
        <>
            <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
                <Link
                    to={`/`}
                    className="text-2xl hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border-2 mt-8 hover:text-teal-200 text-teal-600 border-teal-600 py-4 px-4 pl-4"
                >
                    Back To Home
                </Link>
                {user && (
                    <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
                        <div className="w-2/12 flex flex-col space-y-4">
                        <h2 className="text-white font-bold text-2xl border-1 border-b-2 border-teal-600">
                                ID:
                            </h2>
                            <h2 className="text-white font-bold text-2xl border-1 border-b-2 border-teal-600">
                                Name:
                            </h2>
                            <h2 className="text-white font-bold text-2xl border-1 border-b-2 border-teal-600">
                                Email:
                            </h2>
                            <h2 className="text-white font-bold text-2xl border-1 border-b-2 border-teal-600">
                                Phone:
                            </h2>
                        </div>
                        <div className="w-10/12 flex flex-col space-y-4  ">
                        <h2 className="text-teal-200 font-bold text-2xl border-1 border-b-2 border-teal-600">
                                {user.id}
                            </h2>
                            <h2 className="text-teal-200 font-bold text-2xl border-1 border-b-2 border-teal-600">
                                {user.name}
                            </h2>
                            <h2 className="text-teal-200 font-bold text-2xl border-1 border-b-2 border-teal-600">
                                {user.email}
                            </h2>
                            <h2 className="text-teal-200 font-bold text-2xl border-1 border-b-2 border-teal-600">
                                {user.phone}
                            </h2>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Users;