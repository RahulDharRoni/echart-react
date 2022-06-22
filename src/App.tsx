import React from 'react';
import './App.css';
import Barchart from './Component/Barchart';
import Scatterplot from './Component/Scatterplot';
import Scatterplot2 from './Component/Scatterplot2';
import './CSS/chart.css'

const App: React.FC = () => {


  return (
    <div className='bar-chart'>
      <div className='style-chart'>
        <Barchart></Barchart>
      </div>
      <div className='style-chart'>
        <Scatterplot></Scatterplot>
      </div>
      <div className='style-chart'>
        <Scatterplot2></Scatterplot2>
      </div>

    </div>
  );
}

export default App;
