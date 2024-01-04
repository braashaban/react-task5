import { FaBirthdayCake, FaStar, FaUser } from 'react-icons/fa'
import  './CardTrend.css'

const CardTrend = (props) => {
  return (
    <>
<div className="cardstrending">

    <div className="imgTrend">
        <img src={props.cardinforma.cardtrendimg} alt=""  className='imgTrend1'/>
        <img src={props.cardinforma.cardflag} alt=""  className='flagggimg'/>
    </div>
    <div className="contenttrend">
    <div className="days">
        <div className="days1">
            <FaBirthdayCake />
            <p>{props.cardinforma.cardIMG}</p>
        </div>
        <div className="people">
            <FaUser />
            <span>{props.cardinforma.cardtrendpepole} People going</span>
        </div>
    </div>
    <div className="country">
        <h3>{props.cardinforma.country}</h3>
        <div className="stars">
        <FaStar className='star' />
        <FaStar className='star'/>
        <FaStar className='star' />
        <FaStar className='star'/>
        <FaStar className='star' />
        </div>
      
    </div>
    <p>{props.cardinforma.cardText}</p>
    <button className='btntrend'>Explore Now</button>
    </div>
    
</div>

    </>
  )
}

export default CardTrend