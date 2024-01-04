import "./CardServ.css"
const CardServ = (props) => {
  return (
<div className="cardserv">
<img src={props.cardInfo.cardIMG} alt="" /> 
    <h2>{props.cardInfo.cardTitle}</h2>
    <p>{props.cardInfo.cardText}</p>
   
</div>

  )
}

export default CardServ