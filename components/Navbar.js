import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill, BsBagPlus } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const Navbar = ({ logout, user, cart, addToCart, removeFromToCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromToCart, clearCart, subTotal);
  const router = useRouter()
  const [dropDown, setDropDown] = useState(false)

  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true)
    let exempted = ['/checkout', '/order','/orders','/myaccount']
    if (exempted.includes(router.pathname)) {
      setSidebar(false)
    }

  }, [])

  const toggleClass = () => {
    setSidebar(!sidebar)

    // if (ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-full")
    //   ref.current.classList.add("translate-x-0")
    // }
    // else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0")
    //   ref.current.classList.add("translate-x-full")
    // }
  }
  const ref = useRef();


  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">TechSolo</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center ">
            <Link href={'/'} ><a className="mr-5 hover:text-gray-900">First Link</a></Link>
            <Link href={'/sole'} ><a className="mr-5 hover:text-gray-900">Sole</a></Link>
            <Link href={'/shoe'} ><a className="mr-5 hover:text-gray-900">Shoe</a></Link>

            <Link href={'/contact'} ><a className="mr-5 hover:text-gray-900">Contact Us</a></Link>

            <Link href={'/about'} ><a className="mr-5 hover:text-gray-900">About</a></Link>
            <Link href={'/product/Finaldone'} ><a className="mr-5 hover:text-gray-900">Product</a></Link>
            <Link href={'/tshirt'} ><a className="mr-5 hover:text-gray-900">T Shirts</a></Link>
            <Link href={'/hoodies'} ><a className="mr-5 hover:text-gray-900">Hoodies</a></Link>

            <Link href={'/Practice'} ><a className="mr-5 hover:text-gray-900">Practice</a></Link>

          </nav>
          {/* <div ref={ref} className={`sideCart absolute z-10 right-0 top-0 ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} transform transition-transform`}> */}

          <div ref={ref} className={`sideCart absolute z-10 top-0 ${sidebar ? 'right-0' : '-right-[450px]'} transition-full`}>
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-[100vh] flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-0 flex h-7 items-center">
                      <button type="button" onClick={toggleClass} className="-m-2 p-2 absolute text-gray-400 hover:text-gray-500"><AiFillCloseCircle /></button>
                    </div>
                  </div>



                  <div className="mt-8">
                    <div className="flow-root">
                      <ol role="list" className="-my-6 divide-y divide-gray-200 list-decimal">
                        {Object.keys(cart).length == 0 && <div> Cart is Empty</div>}
                        {Object.keys(cart).map((k) => {
                          return <li className="flex py-6" key={k}>
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img alt="ecommerce" className="h-24 w-24 object-cover object-center rounded" src={cart[k].img} />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h5 className="mt-1 text-sm">
                                    {cart[k].name}  ({cart[k].size} /{cart[k].variant} )
                                  </h5>
                                  <p className="ml-4">Rs: {cart[k].price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{cart[k].name}</p>
                                {/* <p className="mt-1 text-sm text-gray-500">{cart[k].photo}</p> */}
                                {/* <p className="mt-1 text-sm text-gray-500">{cart[k].img}</p> */}


                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">{cart[k].qty}</p>
                                <span><AiFillMinusCircle onClick={() => { removeFromToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].photo, cart[k].img) }} className='inline text-1xl' />
                                  <BsFillPlusCircleFill onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].photo, cart[k].img) }} className='inline text-1xl' /></span>
                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>

                        })}
                      </ol>
                    </div>
                  </div>
                </div>




                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6 flex">
                    <Link href={'/checkout'}><button disabled={Object.keys(cart).length == 0} className="disabled:bg-slate-400 flex items-center justify-center rounded-md border border-transparent bg-indigo-600  px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"><span className='px-1'>  <BsBagPlus /></span> Checkout</button></Link>

                    <button onClick={clearCart} disabled={Object.keys(cart).length == 0} className="disabled:bg-slate-400 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 mx-2 px-2 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"> <BsBagPlus /> <span className='px-1' > Clear Cart</span></button>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className='flex cart items-center absolute top-8 right-4'>
            {user.value && <MdAccountCircle onMouseOver={() => { setDropDown(true) }} onMouseLeave={() => { setDropDown(false) }} className='text-xl md:text-2xl mr-3' />}

            {!user.value && <Link href={'/login'}><a>
              <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 mx-2 px-1 text-base font-sm text-white shadow-sm hover:bg-indigo-700">Login</button>
            </a>
            </Link>}
            <AiOutlineShoppingCart onClick={toggleClass} className='text-xl md:text-2xl' />
          </div>

          {dropDown && <div className='absolute right-14 top-14 bg-blue-300' onMouseOver={() => { setDropDown(true) }} onMouseLeave={() => { setDropDown(false) }}>
            <ul>
              <Link href={'/myaccount'}><a><li>My Account</li></a></Link>

              <hr />
              <Link href={'/orders'}><a><li>Orders</li></a></Link>
              <hr />
              <li onClick={logout}>Logout</li>
            </ul>
          </div>}

          {/* <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
        
          
            <a href="#" role="button" onClick={toggleClass} className="relative flex">
            <svg className=" w-8 h-8 fill-current" viewBox="0 0 24 24">
                <AiOutlineShoppingCart />
              </svg>
              <svg className=" w-8 h-8 fill-current" viewBox="0 0 24 24">
                <AiOutlineShoppingCart role="button" onClick={toggleClass} className="relative flex" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
              </span>
            </a>
          </li> */}
        </div>
      </header>
    </>
  )
}

export default Navbar