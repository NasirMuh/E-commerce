import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill, BsBagPlus } from 'react-icons/bs';
import Head from 'next/head';


const Checkout = ({ cart, addToCart, removeFromToCart, subTotal }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPinCode] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')

    const [disable, setDisable] = useState(false)

    const HandleInput = async (e) => {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)

        }
        else if (e.target.name == "address") {
            setAddress(e.target.value)

        } else if (e.target.name == "phone") {
            setPhone(e.target.value)

        } else if (e.target.name == "pincode") {
            setPinCode(e.target.value)
            if (e.target.value.length == 3) {
                let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pinCode`)
                let pinsJson = await pins.json()
                if (Object.keys(pinsJson).includes(e.target.value)) {
                    setState(pinsJson[e.target.value][1])
                    setCity(pinsJson[e.target.value][0])
                } else {
                    setState('')
                    setCity('')
                    // alert("try to put right information")
                }
            }
            else {
                setState('')
                setCity('')
            }

        } else if (e.target.name == "state") {
            setState(e.target.value)
        }
        else if (e.target.name == "city") {
            setCity(e.target.value)

        }
        setTimeout(() => {
            if (name.length > 3 && email.length > 3) {
                setDisable(true)

            } else {
                setDisable(false)
            }
        }, 100);
    }


    return (
        <>
            <Head>
                <title>CheckOut</title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
            </Head>

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <h1 className='font-bold text-3xl text-center'>Checkout</h1>
                <h2 className='font-semibold text-left mx-2 text-semibold'>1. Delivery</h2>
                <div className="flex flex-wrap mx-2">

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
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                            <textarea onChange={HandleInput} value={address} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input onChange={HandleInput} value={phone} type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                            <input onChange={HandleInput} value={pincode} type="pincode" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                            <input onChange={HandleInput} value={state} type="state" id="state" name="state" readOnly={true} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input onChange={HandleInput} value={city} type="city" id="city" name="city" readOnly={true} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                </div>
                <h2 className='font-semibold text-left mx-2 text-semibold'>1. Review Cart Items</h2>
                <div className='sideCart'>
                    <div className="flex flex-col  bg-white shadow-xl">
                        <div className="flex-1  py-2 px-2 sm:px-2">
                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {/* {Object.keys(cart).length == 0 && <div> Cart is Empty</div>} */}
                                        {Object.keys(cart).map((k) => {
                                            return <> <li className="flex py-6" key={k}>
                                                {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img alt="ecommerce" className="h-24 w-24 object-cover object-center rounded" src={cart[k].img} />
                                                </div> */}
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href="#"> {cart[k].name}</a>
                                                            </h3>
                                                            <p className="ml-4">{cart[k].price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{cart[k].variant}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">{cart[k].qty}</p>
                                                        <span><AiFillMinusCircle onClick={() => { removeFromToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='inline text-1xl' />  <BsFillPlusCircleFill onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='inline text-1xl' /></span>

                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            </>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 py-2 px-2 sm:px-2">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${subTotal}</p>
                            </div>
                            {
                                disable == true ? <Link href={'/about'} ><a className="mr-5 hover:text-gray-900"><button className="flex w-30 text-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">Payment $ {subTotal}</button></a></Link> : <button className="flex w-30 text-center text-black bg-indigo-100 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-200 rounded">Payment $ {subTotal}</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout