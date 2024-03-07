import React from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { HiNewspaper } from "react-icons/hi";
import { RiFileExcel2Line } from "react-icons/ri";
import { CiCoins1 } from "react-icons/ci";

const Sentiment = () => {
  const cardBodyStyle = {
    minWidth: '400px',
    marginRight: '10px',
    backgroundColor: '#E9F5FD',
  }
  return (
    <div className="card pb-3 mt-3">
      <div className="card-body">
        <h5>Sentiment</h5>
        <h6 className='d-flex align-items-center mt-3 text-dark-emphasis'>
          Key Events
          <FaInfoCircle color='#7C7E8C' className='ms-2' />
        </h6>
        <div className="container-fluid py-2">
          <div className="d-flex flex-row flex-nowrap scroll-container overflow-x-auto">
            <div className="card card-body d-flex flex-row" style={cardBodyStyle}>
              <div><HiNewspaper color='white' className='bg-primary p-1 rounded-circle' size={35} /></div>
              <div className='ms-2' >
                <div style={{ fontWeight: 400 }} className='text-black'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem aliquam voluptate.
                  <p className='text-muted mt-2' style={{ fontSize: 15 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos id vero debitis expedita magnam ullam omnis, nesciunt vitae. Commodi error libero excepturi hic suscipit. Ea accusantium iste maxime quod.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-body d-flex flex-row" style={cardBodyStyle}>
              <div><IoAnalyticsOutline color='white' className='bg-success p-1 rounded-circle' size={35} /></div>
              <div className='ms-2' >
                <div style={{ fontWeight: 400 }} className='text-black'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem aliquam voluptate.
                  <p className='text-muted mt-2' style={{ fontSize: 15 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos id vero debitis expedita magnam ullam omnis, nesciunt vitae. Commodi error libero excepturi hic suscipit. Ea accusantium iste maxime quod.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-body d-flex flex-row" style={cardBodyStyle}>
              <div><RiFileExcel2Line color='white' className='bg-warning p-1 rounded-circle' size={35} /></div>
              <div className='ms-2' >
                <div style={{ fontWeight: 400 }} className='text-black'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem aliquam voluptate.
                  <p className='text-muted mt-2' style={{ fontSize: 15 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos id vero debitis expedita magnam ullam omnis, nesciunt vitae. Commodi error libero excepturi hic suscipit. Ea accusantium iste maxime quod.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-body d-flex flex-row" style={cardBodyStyle}>
              <div><CiCoins1 color='white' className='bg-danger p-1 rounded-circle' size={35} /></div>
              <div className='ms-2' >
                <div style={{ fontWeight: 400 }} className='text-black'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem aliquam voluptate.
                  <p className='text-muted mt-2' style={{ fontSize: 15 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos id vero debitis expedita magnam ullam omnis, nesciunt vitae. Commodi error libero excepturi hic suscipit. Ea accusantium iste maxime quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 className='d-flex align-items-center mt-3 text-dark-emphasis mb-2'>
          Analyst Estimates
          <FaInfoCircle color='#7C7E8C' className='ms-2' />
        </h6>
        <div className='d-flex flex-row align-items-center'>
          <div className='p-4 rounded-circle d-flex align-items-center justify-content-center' style={{ backgroundColor: '#E9F5FD', fontWeight: 500, fontSize: 23, height: '100px', color: '#00B287' }}>76%</div>
          <div className='ms-4' style={{ width: '100%' }}>
            <div className='d-flex align-items-center' style={{ width: '100%' }}>
              <p className='text-muted me-4' style={{ fontSize: 14 }}>Buy</p>
              <div className='rounded' style={{ backgroundColor: '#00B287', width: '76%', height: '10px' }} />
              <p className='text-muted ms-4' style={{ fontSize: 14 }}>76%</p>
            </div>
            <div className='d-flex align-items-center' style={{ width: '100%' }}>
              <p className='text-muted me-4' style={{ fontSize: 14 }}>Hold</p>
              <div className='rounded' style={{ backgroundColor: '#C7C8CE', width: '8%', height: '10px' }} />
              <p className='text-muted ms-4' style={{ fontSize: 14 }}>8%</p>
            </div>
            <div className='d-flex align-items-center' style={{ width: '100%' }}>
              <p className='text-muted me-4' style={{ fontSize: 14 }}>Sell</p>
              <div className='rounded' style={{ backgroundColor: '#F96478', width: '16%', height: '10px' }} />
              <p className='text-muted ms-4' style={{ fontSize: 14 }}>16%</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Sentiment