import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouMayLike = () => {
  const BASE_API_URL = 'https://api.coingecko.com/api/v3';
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchResponse();
    console.log(items)
  }, []);

  const fetchResponse = async () => {
    try {
      const res = await axios.get(`${BASE_API_URL}/search/trending`);
      console.log(res.data);
      setItems(res.data.coins);
      // console.log(res.data.coins[0].item.data.sparkline)
    } catch (error) {
      console.log(error);
    }
  }

  const calculatePercentageChange = (current, change) => {
    current = current.slice(1, current.length);
    current = parseFloat(current.replace(/,/g, ''));
    current = current.toFixed(2);
    change = change.toFixed(2);
    const percentage = (current / change * 100).toFixed(2);
    return (percentage < 0) ? percentage : '+' + percentage;
  }

  const cardBodyStyle = {
    minWidth: '220px',
    marginRight: '10px',
    maxHeight: '180px',
  }

  return (
    <div className='mt-4 ms-md-5 ms-sm-3 mb-5'>
      <h4>You May Also Like</h4>
      <div className="d-flex flex-nowrap scroll-container overflow-x-auto">
        {items.map((item, index) => (
          <div key={index} className='rounded card p-3' style={cardBodyStyle}>
            <div className='d-flex align-items-center'>
              <img src={item.item.thumb} alt={item.item.name} width={30} className='rounded-circle' />
              <p className='mx-1' style={{ fontWeight: 400 }}>{item.item.symbol}</p>
              <p
                className={item.item.data.price_change_percentage_24h.usd < 0 ? 'rounded px-2 me-2 text-danger' : 'rounded px-2 me-2 text-success'}
                style={{ fontSize: 14, backgroundColor: (item.item.data.price_change_percentage_24h.usd < 0) ? '#FDF1EF' : '#F0FAF7' }}
              >{calculatePercentageChange(item.item.data.price, item.item.data.price_change_percentage_24h.usd)}%
              </p>
            </div>
            <p style={{ fontWeight: 400, fontSize: 20 }}>{item.item.data.price}</p>
            <img src={item.item.data.sparkline} alt="sparkline" style={{ textAlign: 'center' }} />
          </div>
        ))}
      </div>
      <h4 className='mt-4'>Trending Coins</h4>
      <div className="d-flex flex-nowrap scroll-container overflow-x-auto">
        {items.map((item, index) => (
          <div key={index} className='rounded card p-3' style={cardBodyStyle}>
            <div className='d-flex align-items-center'>
              <div><img src={item.item.thumb} alt={item.item.name} width={30} className='rounded-circle' /></div>
              <p className='mx-1' style={{ fontWeight: 400 }}>{item.item.symbol}</p>
              <p
                className={item.item.data.price_change_percentage_24h.usd < 0 ? 'rounded px-2 me-2 text-danger' : 'rounded px-2 me-2 text-success'}
                style={{ fontSize: 14, backgroundColor: (item.item.data.price_change_percentage_24h.usd < 0) ? '#FDF1EF' : '#F0FAF7' }}
              >{calculatePercentageChange(item.item.data.price, item.item.data.price_change_percentage_24h.usd)}%
              </p>
            </div>
            <p style={{ fontWeight: 400, fontSize: 24 }}>{item.item.data.price}</p>
            <img src={item.item.data.sparkline} alt="sparkline" style={{ textAlign: 'center' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default YouMayLike