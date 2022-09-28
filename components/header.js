import Link from 'next/link'
import React from 'react'
import style from '../styles/Header.module.css'
import { useSelector } from "react-redux";


function Header() {
  
  const favorites = useSelector((state) => state.favoriteReducer);


  return (
    <div>
        <nav className={style.navbar}>
            <h3 className={style.logo}><Link href='/'>CustomerFAVS NEXT</Link></h3>

            <ul className={style.list}>
                <li className={style.listItem}><Link href='/'><a>Home</a></Link></li>
                <li className={style.listItem}><Link href='/customers'><a>Customers</a></Link></li>
                <li className={style.listItem}><Link href='/favourites'><a>Favourites <sup>{favorites.length}</sup></a></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header