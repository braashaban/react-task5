import  './Footer.css'
import logo from '../../images/logofoot.png'
import bg from '../../images/footer-bg.png'
import { FaFacebookMessenger, FaInfinity, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
console.log(bg)
const Footer = () => {
  return (
   <footer  style={{ backgroundImage: `url(${bg})` }}>
<div className='social'>
   <img src={logo} alt="" /> 
   <p>Travel helps companies manage payments easily.</p>

   <FaLinkedinIn className="iconfoot" />
   <FaFacebookMessenger className="iconfoot" />
   <FaTwitter  className='iconfoot' />
   <FaInfinity className='iconfoot'  />

</div>
<div className='company'>
    <h3 className='titlefooter'>company</h3>
    <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Pricing</li>
        
    </ul>
</div>
<div className='desti'>
<h3  className='titlefooter'>Destinations</h3>
    <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Pricing</li>
        
    </ul>
</div>

   </footer>

  )
}

export default Footer