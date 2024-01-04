import CardServ from "../CardServ/CardServ"
import './Services.css'
import img1 from '../../images/service-1.png'
import img2 from '../../images/service-2.png'
import img3 from '../../images/service-3.png'
import img4 from '../../images/service-4.png'
const Services = () => {
    const servData = [
        {
          id: 1,
          cardIMG: img1,
          cardTitle: "Guided Tours",
          cardText: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
          id:2,
          cardIMG: img2,
          cardTitle: "Best Flights Options",
          cardText: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
            id:3,
            cardIMG:img3,
            cardTitle: "Title",
            cardText: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
          },
          {
            id: 4,
            cardIMG: img4,
            cardTitle: "Title",
            cardText: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
          },
      ];
    
  return (
    <> 
    <div className="mainserv">


    <div className="title11">
        <h3>CATEGORY</h3>
        <h1>We Offer Best Services</h1>
    </div>
    <div className="cards">
    {servData.map((data) => {
          return <CardServ key={data.id} cardInfo={data} />;
        })}
    </div>
    </div>
    </>
  )
}

export default Services