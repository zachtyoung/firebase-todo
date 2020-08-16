import React from 'react'
import firebase from './assets/firebase.svg'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img className='fire' src={firebase}></img><h1 className='nav-title'>Firestore Todo</h1>
        </div>
    )
}
