import CardTrend from "../CardTrend/CardTrend";
import "./Trending.css"
import imgtrend1 from "../../images/n1.png"
import imgtrend2 from "../../images/n2.png"
import imgtrend3 from "../../images/n3.png"
import imgflag1 from "../../images/flag-1.png"
import imgflag2 from "../../images/flag-2.png"
import imgflag3 from "../../images/flag-3.png"

const Trending = () => {
    const trendData = [
        {
          id: 1,
          cardtrendimg: imgtrend1,
          cardflag: imgflag1,
        country:"Switzerland",
          cardtrendnumber: 8,
          cardtrendpepole: 30,
          cardText: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
        },
        {
          id:2,
          cardtrendimg: imgtrend2,
          cardflag: imgflag2,
          cardtrendnumber: 8,
          cardtrendpepole: 60,
          country:"Amazon",
          cardText: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
        },
        {
            id:3,
            cardtrendimg: imgtrend3,
            cardflag: imgflag3,
            cardtrendnumber: 8,
            cardtrendpepole: 120,
            country:"Giza",
            cardTitle: "Title",
            cardText: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
          }
          
      ];

  return (
    
    <div className="trending">
  <div className="title11">
        <h3>trendy</h3>
        <h1>Our Trending Tour Packages</h1>
    </div>

    <div className="cardtrend">
    {trendData.map((data) => {
          return <CardTrend key={data.id} cardinforma={data} />;
        
        })}
       
    </div>
    </div>
  )
}

export default Trending