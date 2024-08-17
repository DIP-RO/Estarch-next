import React from 'react'
import { PropagateLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='flex justify-center'><PropagateLoader color="#060101" /></div>
  )
}
