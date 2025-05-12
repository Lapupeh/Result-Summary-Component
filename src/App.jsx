import data from './data.json';
import './App.css';

function ResultCard() {
  return(
    <>
      <div className="result-card">
        <h1>Your Result</h1>
        <div className="total-score">
          <span className='score'>76</span>
          <span className='overall'> of 100</span>
        </div>
        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests</p>
      </div>
    </>
  ) 
}

function SummaryCard() {
  return (
    <>
    <div className="summary-card">
      <h1>Summary</h1>
      <div className="test-summary">
          {data.map((item, i) => (
          <div key={i} className={`test test-${i}`}>
            <div className="test-category">
              <img src={item.icon} alt="icon"/>
              <h4>{item.category}</h4>
            </div>
            <div>
              <span className="test-score">{item.score}</span>
              <span className='test-overall'> / 100</span>
            </div>
          </div>
          ))}
      </div>
      <button>Continue</button>
    </div>
    </>
  )
}


function App() {
  return (
    <>
      <div className="result-summary-container">
        <ResultCard/>
        <SummaryCard/>
      </div>
    </>
  )
}

export default App
