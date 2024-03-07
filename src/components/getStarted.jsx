import React from 'react';
import gs from '../assets/gs.png';
import { FaArrowRight } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="card pb-3 mt-3 bg-primary bg-gradient rounded me-5">
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'white', fontSize: 25 }} className='px-4 py-3'>Get Started with KoinX for FREE</h3>
        <p style={{ color: 'white', fontSize: 14 }} className='px-3'>With out range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src={gs} alt="" width='100%' /><br/>
        <button className='btn btn-light mt-3 px-3 py-2'>Get Started for FREE <FaArrowRight/></button>
      </div>
    </div>
  )
}

export default GetStarted