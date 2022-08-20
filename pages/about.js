import { useRouter } from "next/router";
import React, { useState } from 'react'

const About = () => {
    
    const router = useRouter();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [disabled, setDisabled] = useState(true)

    const HandleInput = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        setTimeout(() => {
            if (name.length > 3 && email.length > 3) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        }, 100);
    }

    return (
        <>
            <h2>This is my About Page</h2>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input onChange={HandleInput} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input onChange={HandleInput} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>


            <button onClick={() => router.push("/")}>Back to Home</button>
            {/* <button onClick={() => router.push("/contact")}>Contact PAge</button> */}
        </>
    )
}

export default About;
