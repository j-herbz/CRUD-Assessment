import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
                <Link to={"/"} className="text-3xl text-teal-200 font-semibold font-sans hover:text-white">CRUD</Link>
            </div>
        </>
    )
}

export default Navbar