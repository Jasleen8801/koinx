import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Bitcoin from './components/bitcoin';
import Performance from './components/performance';
import Sentiment from './components/sentiment';
import About from './components/about';
import Tokenomics from './components/tokenomics';
import Team from './components/team';
import GetStarted from './components/getStarted';
import Trending from './components/trending';
import YouMayLike from './components/youMayLike';

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#EEF3F5' }}>
        <Navbar />
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="col-md-8">
              <div className='ms-md-5 pt-3'>
                <div>
                  <p className='lead d-flex' style={{ fontSize: 14, color: '#333' }}>
                    Cryptocurrencies <div className='mx-2'>&gt;&gt;</div>
                    <span style={{ color: 'black', fontWeight: '400' }}>Bitcoin</span>
                  </p>
                </div>
                <div>
                  <Bitcoin />
                </div>
                <div className="scroll-container d-flex mt-3 border-bottom flex-nowrap overflow-x-auto">
                  <div className='me-4 text-primary border-bottom border-primary border-2' style={{ fontWeight: 500, fontSize: 15 }}>Overview</div>
                  <div className='me-4' style={{ fontWeight: 400, fontSize: 15 }}>Fundamentals</div>
                  <div className='me-4 text-nowrap' style={{ fontWeight: 400, fontSize: 15 }}>New Insights</div>
                  <div className='me-4' style={{ fontWeight: 400, fontSize: 15 }}>Sentiments</div>
                  <div className='me-4' style={{ fontWeight: 400, fontSize: 15 }}>Team</div>
                  <div className='me-4' style={{ fontWeight: 400, fontSize: 15 }}>Technicals</div>
                  <div className='me-4' style={{ fontWeight: 400, fontSize: 15 }}>Tokenomics</div>
                </div>
                <div>
                  <Performance />
                </div>
                <div>
                  <Sentiment />
                </div>
                <div>
                  <About />
                </div>
                <div>
                  <Tokenomics />
                </div>
                <div>
                  <Team />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-4">
              <div className='pt-2'>
                <GetStarted />
              </div>
              <div>
                <Trending />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <YouMayLike/>
      </div>
    </>
  );
}

export default App;
