import React, { useState, useEffect } from 'react';
import { FaBitcoin } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import TradingViewWidget from './graph';
import axios from 'axios';

const Bitcoin = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchResponse();
  }, []);

  const fetchResponse = async () => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'bitcoin',
          vs_currencies: 'inr,usd',
          include_24hr_change: true,
        }
      });
      setItem(res.data.bitcoin);
      console.log(res.data.bitcoin);
    } catch (error) {
      console.log(error);
    }
  }

  const formatCurrency = (value, count) => {
    if(count==='inr') return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value)
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
  };

  return (
    <div className="card pb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <FaBitcoin size={30} color='orange' />
          <h5 className="mx-2 my-1">
            Bitcoin {' '}
            <span className='lead text-muted' style={{ fontSize: 15, fontWeight: 400 }}>BTC</span>
          </h5>
          <span className="text-bg-secondary ms-3 rounded px-2 py-1">Rank #1</span>
        </div>
        <div>
          <div className='d-flex mt-4 d-flex align-items-center mb-0'>
            <h4>{formatCurrency(item.usd, 'usd')}</h4>
            <div className='rounded px-2 ms-3 me-2 d-flex align-items-center py-1' style={{ backgroundColor: '#EAF8F4', fontWeight: 400 }}>
              <span style={{ fontSize: 12, color: '#2FB989' }}>
                <GoTriangleUp size={20} />
                2.51%
              </span>
            </div>
            <span className='text-muted' style={{ fontSize: 14 }}>&#40;24H&#41;</span>
          </div>
          <div style={{ fontSize: 15 }}>
            {formatCurrency(item.inr, 'inr')}
          </div>
        </div>
        <hr className='opacity-5 text-muted' />
        <div className='d-md-flex justify-content-md-between'>
          <div className='text-black mb-md-0' style={{ fontSize: 16, fontWeight: 500 }}>
            Bitcoin Price Chart (USD)
          </div>
          <div className='d-md-flex justify-content-md-end d-sm-flex mb-1'>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>1H</div>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>24H</div>
            <div className='me-md-3 me-sm-2 text-primary rounded-pill px-2' style={{ fontSize: 12, fontWeight: 500, backgroundColor: '#E3ECFF' }}>7D</div>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>1M</div>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>3M</div>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>6M</div>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>1Y</div>
            <div className='me-md-3 me-sm-2 text-muted' style={{ fontSize: 12, fontWeight: 500 }}>ALL</div>
          </div>
        </div>
        <div className="tradingview-widget-container mt-1">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  )
}
export default Bitcoin