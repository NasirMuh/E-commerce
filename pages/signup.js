import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    useEffect(() => {
        if(localStorage.getItem('token')){
            router.push('/')
        }
        })
        

    const SubmitFormData = async (e) => {
        e.preventDefault()
        const data = { name, email, password }

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json();

        setName('')
        setEmail('')
        setPassword('')

        toast.success('User has been Created successfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    const ChangeHandle = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }

    }

    return (
        <>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-center">Sign up an account</h3>
                    {/* <Link href={'/login'}><h6 className="decoration-red-900 text-center">Login</h6></Link>   */}
                    <Link href={'/login'}><a href="#" className="text-sm mx-auto justify-center flex text-blue-600 hover:underline">Or Login</a></Link>

                    <form onSubmit={SubmitFormData} method='POST'>
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="name">Name</label>
                                <input value={name} onChange={ChangeHandle} id='name' name='name' type="text" autoComplete='of' placeholder="Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {/* <span className="text-xs tracking-wide text-red-600">Name field is required </span> */}
                            </div>
                            <div>
                                <label className="block" htmlFor="email">Email</label>
                                <input value={email} onChange={ChangeHandle} id='email' name='email' type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input value={password} onChange={ChangeHandle} id='password' name='password' type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup