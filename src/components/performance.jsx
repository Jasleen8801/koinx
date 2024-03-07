import React from 'react';
import GradientLine from './gradientLine';

import { FaInfoCircle } from "react-icons/fa";

const Performance = () => {
  // const lowValue = 46930.22;
  // const highValue = 49343.83;
  const lowValue = 60;
  const highValue = 80;

  const coldiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  }

  const tablediv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 100px 10px 0px',
    height: '50px',
    borderBottom: '1px solid #E1E1E1'
  }

  const p1style = {
    color: '#8692A2',
    fontSize: 14,
  }

  const p2style = {
    fontWeight: 500,
    fontSize: 14
  }

  const p3style = {
    fontSize: 10,
    marginTop: 0,
    fontWeight: 400
  }

  return (
    <div className="card pb-3 mt-3">
      <div className="card-body">
        <h5>Performance</h5>
        <div className='d-flex align-items-center mt-4 '>
          <p style={{ fontSize: 12 }} className='text-muted text-nowrap me-2'>
            Today's Low<br />
            <span style={{ fontSize: 14 }} className='text-black'>46,930.22</span>
          </p>
          <GradientLine low={lowValue} high={highValue} show={true} />
          <p style={{ fontSize: 12 }} className='text-muted text-nowrap ms-2'>
            Today's High<br />
            <span style={{ fontSize: 14 }} className='text-black'>49,343.83</span>
          </p>
        </div>
        <div className='d-flex align-items-center mt-2 '>
          <p style={{ fontSize: 12 }} className='text-muted text-nowrap me-2'>
            52W Low<br />
            <span style={{ fontSize: 14 }} className='text-black'>16,930.22</span>
          </p>
          <GradientLine low={lowValue} high={highValue} show={false} />
          <p style={{ fontSize: 12 }} className='text-muted text-nowrap ms-2'>
            52W High<br />
            <span style={{ fontSize: 14 }} className='text-black'>49,743.83</span>
          </p>
        </div>
        <h6 className='d-flex align-items-center mt-4'>
          Fundmentals
          <FaInfoCircle color='#ABB9BF' className='ms-2' />
        </h6>
        <div className='d-md-flex mb-3'>
          <div style={coldiv}>
            <div style={tablediv}>
              <p style={p1style}>Bitcoin Price</p>
              <p style={p2style}>$16,815.46</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>24h Low / 24h High</p>
              <p style={p2style}>$16,382.07 / $16,874.12</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>7d Low / 7d High</p>
              <p style={p2style}>$16,382.07 / $16,874.12</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>Trading Volume</p>
              <p style={p2style}>$23,249,202,782</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>Market Cap Rank</p>
              <p style={p2style}>#1</p>
            </div>
          </div>
          <div style={coldiv}>
            <div style={tablediv}>
              <p style={p1style}>Market Cap</p>
              <p style={p2style}>$323,507,290,047</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>Market Cap Dominance</p>
              <p style={p2style}>38,343%</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>Volume / Market Cap</p>
              <p style={p2style}>0.0718</p>
            </div>
            <div style={tablediv}>
              <p style={p1style}>All-Time High</p>
              <div>
                <p style={p2style}>
                  $69,044.77 {' '}
                  <span style={{ color: 'red', fontWeight: 400 }}>-75.6%</span>
                  <br/>
                  <p style={p3style}>Nov 10, 2021 (about 1 year)</p>
                </p>
              </div>
            </div>
            <div style={tablediv}>
              <p style={p1style}>All-Time Low</p>
              <div>
                <p style={p2style}>
                  $67.81 {' '}
                  <span style={{ color: 'green', fontWeight: 400 }}>24729.1%</span>
                  <br/>
                  <p style={p3style}>Jul 06, 2013 (over 9 years)</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Performance