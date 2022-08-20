import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Forgot = () => {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    // const [disable, setDisable] = useState(false)


    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])


    const ChangeHandle = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name == 'cpassword') {
            setCpassword(e.target.value)
        }


    }
    // const disableFun = () => {
    //     console.log("im disable function")
    //         if ( setPassword  &&  setCpassword) {
    //             setDisable(true)

    //         } else {
    //             setDisable(false)
    //         }
    //     }
    

    const sendResetEmail = async () => {
        let data = {
            email,
            sendMail: true
        }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json();
        if (response.success) {
            console.log("email successfully changed")
        }
        else {
            console.log("error")
        }
    }

    const resetPassword = async () => {
        let data = {
            password,
            sendMail: false
        }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let response = await res.json();
        if (response.success) {
            console.log("password has been changed")
        }
        else {
            console.log("error")
        }
    }



    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
                    {router.query.token &&
                        <div>
                            <h3 className="text-2xl font-bold text-center">Forgot Password</h3>
                            <Link href={'/login'}><a href="#" className="text-sm mx-auto justify-center flex text-blue-600 hover:underline">Or Login</a></Link>

                            <div className="mt-4">
                                <div>
                                    <label className="block" htmlFor="password">New Password</label>
                                    <input value={password} onChange={ChangeHandle} id="password" name="password" type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div>
                                    <label className="block" htmlFor="cpassword">Confirm New Password</label>
                                    <input value={cpassword} onChange={ChangeHandle} id="cpassword" name="cpassword" type="password" placeholder="Confirm Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>

                                <div className="flex items-baseline justify-between">
                                    <button  onClick={resetPassword} className=" px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Continue...</button>
                                </div>
                            </div>
                        </div>
                    }
                    {!router.query.token &&
                        <div>
                            <h3 className="text-2xl font-bold text-center">Forgot Password</h3>
                            <Link href={'/login'}><a href="#" className="text-sm mx-auto justify-center flex text-blue-600 hover:underline">Or Login</a></Link>

                            <div className="mt-4">
                                <div>
                                    <label className="block" htmlFor="email">Email</label>
                                    <input value={email} onChange={ChangeHandle} id="email" name="email" type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <span className="text-xs tracking-wide text-red-600">Email field is required </span>
                                </div>

                                <div className="flex items-baseline justify-between">
                                    <button onClick={sendResetEmail} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Continue...</button>
                                </div>
                            </div>
                        </div>
                    }
                    {password != cpassword &&
                        <span className='text-red-500'>
                            Password dont match
                        </span>
                        
                    }
                    {password && password == cpassword &&
                        <span className='text-green-500'>
                            Password is matched
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Forgot