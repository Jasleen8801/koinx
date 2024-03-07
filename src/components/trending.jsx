import React, { useEffect, useState } from 'react';
import { GoTriangleUp } from "react-icons/go";
import axios from 'axios';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 3,
          page: 1,
          sparkline: false,
        },
      });
      console.log(response.data);
      setTrending(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card pb-3 mt-3 me-5">
      <div className="card-body">
        <h5>Trending Coins (24h)</h5>
        {trending.map((coin, index) => (
          <div key={index} className='d-flex justify-content-between'>
            <p style={{ fontWeight: 500, fontSize: 14 }}><img src={coin.image} alt={coin.name} style={{ width: 25, height: 25 }} /> {' '} {coin.name}({coin.symbol})</p>
            <div className='rounded px-2 ms-3 me-2 mb-2 d-flex align-items-center py-1' style={{ backgroundColor: '#EAF8F4', fontWeight: 400 }}>
              <span style={{ fontSize: 12, color: '#2FB989' }}>
                <GoTriangleUp size={20} />
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending