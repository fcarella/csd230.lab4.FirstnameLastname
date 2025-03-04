import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Book() {
    const [count, setCount] = useState(0)

    return (
        <>

            <h1>Vite + React + Router Book</h1>
            <div className="card">
                <h2>csd230 Book</h2>
            </div>
            <p className="read-the-docs">
                read the docs...
            </p>
        </>
    )
}

export default Book
