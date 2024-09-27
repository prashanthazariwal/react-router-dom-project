import React from 'react'
import { Form } from 'react-router-dom'

const Search = () => {
  return (
    <Form method='GET' className='flex gap-2'>
      <input type="text" name="search" id="search" className='border p-1 rounded' />
      <button className='rounded px-2 py-1 text-white bg-blue-500'>submit</button>
    </Form>
  )
}

export default Search
