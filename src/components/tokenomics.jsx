import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const Tokenomics = () => {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    height: 200,
    width: 500,
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      fontSize: 16,
      maxWidth: null,
      reversed: true,
    },
    tooltip: {
      enabled: false
    },
    data: [{
      type: "doughnut",
      showInLegend: true,
      legendText: "{val}",
      dataPoints: [
        { val: "Foundation: 20%", y: 20, color: "#FAA002" },
        { val: "Crowdsale investors: 80%", y: 80, color: "#0082FF" },
      ],
    }]
  };

  return (
    <div className="card pb-3 mt-3">
      <div className="card-body">
        <h5>Tokeneconomics</h5>
        <h6 style={{ fontWeight: 600 }} className='mt-4'>Initial Distribution</h6>
        <CanvasJSChart options={options} />
        <p className='px-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe doloremque, corporis reiciendis cum numquam architecto fugit tempora iusto odio similique. Libero sed cupiditate odio in ipsa ratione a recusandae.
          Possimus, tenetur! Architecto, doloremque quisquam. Mollitia neque omnis sunt adipisci ipsa eius, quo soluta veritatis voluptatibus blanditiis culpa. Quia unde nisi suscipit maiores repellat corrupti rerum adipisci. Ut, nesciunt dolorum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
