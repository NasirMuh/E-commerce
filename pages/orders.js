import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'

const MyOrder = () => {
    const router = useRouter()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchMyOrders = async () => {
            let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'applicaton/json',
                },
                body: JSON.stringify({ jwt: localStorage.getItem('token') }),
            })
            let res = await a.json()
            setOrders(res.orders)

        }
        if (!localStorage.getItem('token')) {
            router.push('/')
        }
        else {
            fetchMyOrders
        }
    })
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='text-center font-semibold'>My Orders</h2>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                OrderId
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Amount
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((item) => {
                                            return <>
                                                <tr key={item._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.orderId}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.name}

                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.amount}

                                                    </td>
                                                    <td>
                                                        <button className="flex w-30 text-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded">Details</button>
                                                    </td>
                                                </tr>
                                            </>
                                        })}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default MyOrder