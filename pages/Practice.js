import React, { useState } from 'react'

const Practice = () => {
    const [Number, setNumber] = useState("");
    const [PTable, setPTable] = useState([]);

    const inputEvent = (event) => {
        setNumber(event.target.value)
    }
    const PrintTable = () => {
        setPTable((oldTable) => {
            var result = '';
            for (var e = 1; e <= 10; e++) {
                result += `${Number} * ${e} = ${e * Number} `
            }
            return [...oldTable, result]
        })
    }

    return (
        <>
         
            {/* <ol>
                {
                    PTable.map((curData, index) => {
                        return <>

                            <li key={index}>{curData}</li>

                        </>

                    })
                }
            </ol> */}
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

                            <div className="mt-4">
                                {
                                    PTable.map((curData, index) => {
                                        return <>
                                            <h3 key={index} className="text-gray-500 text-xs bg-pink-200 tracking-widest title-font w-16">{curData}</h3><br />
                                        </>
                                    })
                                }
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


      <div className="mt-4">
                <div>
                    <input onChange={inputEvent} type="text" placeholder="Enter Eny Number" className="w-30 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    <button onClick={PrintTable} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Print Table</button>
                </div>

            </div>


            <section className="text-gray-600 body-font">
             
                <div className="container px-10 py-10 mx-auto ">
                    
                    <div className="flex flex-wrap -m-4 ">

                  {  PTable.map((curData, index) => {
                            return <> 
                            {/* <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}> */}
                                <div className="lg:w-1/12 md:w-1/4 sm:w-1/2 p-4  border-2 m-1">
                                    {/* <a className="block relative h-80 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block " src={'/sole.jpg'} />
                                    </a> */}
                                    <div className="mt-4">
                                        <h6 className="text-gray-500 text-xs tracking-widest title-font mb-1">{curData}</h6>
                                    </div>
                                </div>

                            {/* </Link> */}
                            </>
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Practice