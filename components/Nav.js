import React from 'react'
import { navLinks } from './../utils/data';
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter();

    let caminho = router.pathname
  return (
    <div>
        <ul className="nav nav-pills">
            { navLinks.map((link, index)=>{
               return (
                <li className="nav-item" key={index}>
                    <a href={link.path} className={caminho==link.path?'nav-link active':"nav-link"}>{link.label}</a>
                </li>)
            })}
        </ul>
    </div>
  )
}