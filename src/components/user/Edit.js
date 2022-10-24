import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`).then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            setPhone(res.data.phone);
        });
        // eslint-disable-next-line
    }, []);

    const navigate = useNavigate();

    const data = {
        name: name,
        email: email,
        phone: phone,
    };

    function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, data).then(navigate("/"));
    }
    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
            <h2 className="text-4xl font-bold">User Details</h2>
            <form className="w-[50%] h-full flex flex-col mt-2">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="font-sans text-lg bg-white/10 outline-none font-normal border border-teal-600 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Enter User's name..."
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-sans text-lg bg-white/10 outline-none font-normal border border-teal-600 py-6 pl-6 mt-4"
                    type="email"
                    placeholder="Enter User's email..."
                />
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="font-sans text-lg bg-white/10 outline-none font-normal border border-teal-600 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder="Enter User's phone number..."
                />
                <button
                    className="font-sans hover:bg-teal-600 outline-none font-bold border-2 border-teal-600 hover:text-white py-4 pl-4 mt-4 bg-white hover:border-2 border-teal-600 text-teal-600"
                    type="submit"
                    onClick={Update}
                >
                    UPDATE USER
                </button>
            </form>
        </div>
    );
}

export default Add;