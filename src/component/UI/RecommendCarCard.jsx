import React from 'react'

const RecommendCarCard = (props) => {

    const {carName, retweet, imgUrl, rentPrice, percentage} = props.item
  return  <div className="recommend__car-card">
  <div className="recommend__car0-top">
    <h5><span><i class="ri-refresh-line"></i></span>{percentage}%
  Recommended</h5>
  </div>
  <div className="recommend__car-img">
    <img src={imgUrl} alt="" />
  </div>
  <div className="recommend__car-bottom">
    <h4>{carName}</h4>
    <div className='recommend__icons'>  
    <div className='recommend__car-other'>
    <p><i class="ri-repeat-line"></i>{retweet}K</p>
    <p><i class="ri-settings-3-line"></i></p>
    <p><i class="ri-timer-flash-fill"></i></p>
    
    </div>
    <span>${rentPrice}/h</span>
    </div>
  </div>
</div>
}

export default RecommendCarCard