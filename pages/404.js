import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import myImg from '../public/errorpageimg.jpg'

function ErrorPage() {
  return (
    <div className='container'>
      <div className='error-wrapper'>
      <h2 style={{textAlign:'center'}}>This is Error Page...you got something wrong!</h2>
      <button><Link href='/'>Go Back Home</Link></button>
        <Image
        src={myImg}
        style={{border:'1px solid red'}}
        alt="error page"
        width={750}
        height={500}
        />
      </div>
    </div>
  )
}

export default ErrorPage