import React from 'react';
import Image from 'next/image';
import mongoose from 'mongoose';
import Product from '../models/Product';
import Link from 'next/link'

const Sole = ({ products }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {products.map((item) => {

                            return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}>
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <Image width={200} height={80} loading="lazy" alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                        <p className="mt-1">${item.price}</p>
                                    </div>
                                </div>

                            </Link>
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {

    if (mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }
    let products = await Product.find({category: 'Sole'})

    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }

}








export default Sole