import React from 'react'
import '../styles/dashboard.css'
import SingleCard from '../component/reuseable/SingleCard';
import MileCharts from '../charts/MileCharts';
import CarStatsCharts from '../charts/CarStatsCharts';
import RecommendCarCard from '../component/UI/RecommendCarCard';
import RecommendCarData from '../assets/dummy-data/recommendCars'
const carObj = {
  title:'Total Cars',
  totalNumber: 750,
  icon:'ri-police-car-line',
}
const tripObj = {
  title:'Daily Trips',
  totalNumber: 1697,
  icon:'ri-steering-2-line',
}

const clientObj = {
  title:'Clients Annually',
  totalNumber: '85K',
  icon:'ri-user-line',
}

const distanveObj = {
  title:'Kilometers Daily',
  totalNumber: 2167,
  icon:'ri-timer-flash-line',
}

const Dashboard = () => {
  return (
  <div className="dashboard">
    <div className="dashboard__wrapper">
      <div className="dashboard__card">
        <SingleCard item={carObj}/>
        <SingleCard item={tripObj}/>
        <SingleCard item={clientObj}/>
        <SingleCard item={distanveObj}/>
        
      </div>
      <div className="statics">
        <div className="stats">
          <h3 className='stats__title'>Miles Statistics</h3>
         <MileCharts />
        </div>

        <div className="stats">
          <h3 className='stats__title'>Car Statistics</h3>
         <CarStatsCharts />
        </div>
      </div>

      <div className="recommend__cars-wrapper">
        {
          RecommendCarData.map(item => <RecommendCarCard item={item} key={item.id} />)
        }
      </div>
    </div>
  </div>
  );
}

export default Dashboard