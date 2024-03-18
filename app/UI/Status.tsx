'use client'
import React from 'react'
import { UiFunctions } from '@/Store/UiFunctions'

function Status(props: { status: string }) {
    const [setSubmitted] = UiFunctions(state => [state.toggleStatus])
  return (
    <div className='w-full h-full bg-black bg-opacity-70 z-40 fixed top-0 left-0'>
        {props.status === "SUCCESS" && <div className="card w-96 bg-green-700 mt-[20%] m-auto text-white">
        <div className="card-body">
            <h2 className="card-title">Success</h2>
            <p>Message submitted successfully. I will reach out as soon as i can!</p>
            <div className="card-actions justify-end">
            <button className="btn" onClick={() => { setSubmitted(false) }}>Close</button>
            </div>
        </div>
        </div>}
        {props.status === "FAILED" && <div className="card w-96 bg-red-500 mt-[20%] m-auto text-white">
        <div className="card-body">
            <h2 className="card-title">Error</h2>
            <p>An error occured. Please try again.</p>
            <div className="card-actions justify-end">
               <button className="btn" onClick={() => { setSubmitted(false) }}>Close</button>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default Status