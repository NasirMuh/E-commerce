import React from 'react'
import { useRouter } from 'next/router';

const pageNo = () => {
    const Router = useRouter();
    const pageNumber = Router.query.pageNo;

  return (
    <>
    <h1>This is {pageNumber} here......</h1>
    <button onClick={()=> Router.push("/contact")}>Contact PAge</button>

    </>
  )
}

export default pageNo;