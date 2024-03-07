import React from 'react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.avif';

const Team = () => {
  const cardBodyStyle = {
    minWidth: '400px',
    marginRight: '10px',
    backgroundColor: '#E9F5FD',
  }
  return (
    <div className="card pb-3 mt-3">
      <div className="card-body">
        <h5>Team</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos culpa eaque sunt optio laborum tenetur esse inventore ratione delectus suscipit, temporibus officiis eligendi consequuntur quasi, laboriosam laudantium? Maxime, repellat velit.</p>
        <div className='rounded d-flex justify-content-center align-items-center my-4' style={cardBodyStyle}>
          <div className='ms-4 mt-2'>
            <img src={p1} alt="" width={108} height={108} className='rounded' />
            <p className='mt-2' style={{ fontWeight: 500, textAlign: 'center' }}>
              John Smith<br />
              <span className='text-muted' style={{ textAlign: 'center', fontSize: 13, fontWeight: 400 }}>Designation here</span>
            </p>
          </div>
          <div className='mx-5 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit provident ea distinctio reiciendis, maxime natus omnis dolor nisi, quod hic necessitatibus nemo quam veniam voluptate harum maiores. Repellendus, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel rerum ex, vero ipsum quod perferendis
            
          </div>
        </div>
        <div className='rounded d-flex justify-content-center align-items-center my-4' style={cardBodyStyle}>
          <div className='ms-4 mt-2'>
            <img src={p2} alt="" width={108} height={108} className='rounded' />
            <p className='mt-2' style={{ fontWeight: 500, textAlign: 'center' }}>
              Adam Sandler<br />
              <span className='text-muted' style={{ textAlign: 'center', fontSize: 13, fontWeight: 400 }}>Designation here</span>
            </p>
          </div>
          <div className='mx-5 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit provident ea distinctio reiciendis, maxime natus omnis dolor nisi, quod hic necessitatibus nemo quam veniam voluptate harum maiores. Repellendus, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel rerum ex, vero ipsum quod perferendis
            
          </div>
        </div>
        <div className='rounded d-flex justify-content-center align-items-center mt-4' style={cardBodyStyle}>
          <div className='ms-4 mt-2'>
            <img src={p3} alt="" width={108} height={108} className='rounded' />
            <p className='mt-2' style={{ fontWeight: 500, textAlign: 'center' }}>
              Ella Williams<br />
              <span className='text-muted' style={{ textAlign: 'center', fontSize: 13, fontWeight: 400 }}>Designation here</span>
            </p>
          </div>
          <div className='mx-5 py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit provident ea distinctio reiciendis, maxime natus omnis dolor nisi, quod hic necessitatibus nemo quam veniam voluptate harum maiores. Repellendus, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel rerum ex, vero ipsum quod perferendis
          </div>
        </div>

      </div>
    </div>
  )
}

export default Team