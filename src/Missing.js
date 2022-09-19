import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page Not Found</h2>
        <p>Something went wrong...</p>
        <p>
          <Link to='/'>Go back to Homepage</Link>
        </p>
    </main>
  )
}

export default Missing