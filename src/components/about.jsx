import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.jpg';

const About = () => {
  return (
    <div className="card pb-3 mt-3">
      <div className="card-body">
        <h5>About Bitcoin</h5>
        <h6 className='mt-4'>What is Bitcoin?</h6>
        <p>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24M BTC and a max supply of 21 M BTC</p>
        <hr />
        <h6>Lorem ipsum dolor sit amet</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa minus esse eaque non maiores sunt, repellendus quisquam cumque sint libero, cum a. Numquam temporibus odit ipsam quae labore quis molestiae!
          Sequi provident maxime vel quaerat natus ad est similique eaque quidem dicta porro, inventore quibusdam unde consequatur debitis ipsa asperiores minus officiis laudantium ex cumque dolor libero quo. Vitae, odio.<br /><br />
          Error provident blanditiis distinctio enim facilis. Ad ipsum dolorum corporis nisi soluta, repudiandae necessitatibus dolor quo rerum nam veritatis minus voluptatum dicta excepturi nobis architecto ex iste placeat laborum voluptatem!
          Aliquid dolor minus quaerat ex totam qui recusandae eveniet quod debitis rerum, necessitatibus, eius repudiandae id unde doloremque ducimus molestias, animi praesentium fugit aperiam numquam repellendus perferendis. Totam, corporis quo?<br /><br />
          Pariatur eum ut iusto voluptatum dolorem animi adipisci ad molestiae maxime necessitatibus corporis possimus in et non quasi delectus odit eos ducimus sequi quisquam fugit nostrum blanditiis, ipsam laudantium. Sapiente.
          Ullam consequuntur labore itaque? Voluptas fugit assumenda quo voluptate suscipit nulla obcaecati id ipsam? Omnis molestias voluptas possimus obcaecati veritatis, ea consectetur nostrum incidunt aut magni enim non quod deleniti.
        </p>
        <hr />
        <h5>Already Holding Bitcoin?</h5>
        <div className='d-md-flex justify-content-start'>
          <div className='rounded d-flex bg1 py-2 mb-sm-2 me-md-3'>
            <div className='m-2'><img src={b1} alt="" width={120} height={120} className='rounded' /></div>
            <div className='m-2 ms-4'>
              <p className='text-white mt-2' style={{ fontWeight: 500, fontSize: 18, width: '80%' }}>Calculate your Profits</p>
              <span className='bg-white text-black rounded px-2 py-1'>Check Now <FaArrowRight /></span>
            </div>
          </div>
          <div className='rounded d-flex bg-danger bg-gradient py-2 mb-sm-2'>
            <div className='m-2'><img src={b2} alt="" width={120} height={120} className='rounded' /></div>
            <div className='m-2 ms-4'>
              <p className='text-white mt-2' style={{ fontWeight: 500, fontSize: 18, width: '80%' }}>Calculate your tax liability</p>
              <span className='bg-white text-black rounded px-2 py-1'>Check Now <FaArrowRight /></span>
            </div>
          </div>
        </div>
        <hr />
        <p className='me-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora placeat at hic veniam, voluptas, ipsam, cupiditate amet nemo enim et a molestiae velit! Veritatis nihil laudantium dolorum dolor similique.
          Quaerat dolorum odit quibusdam perferendis nulla sequi, necessitatibus dolore ratione et veniam laboriosam molestiae fugiat at cum, libero doloremque similique repellat harum maxime.</p>
      </div>
    </div>
  )
}

export default About