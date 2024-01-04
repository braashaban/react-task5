import NavBar from '../NavBar/NavBar'
import './Header.css'
import imges from '../../images/header-bg.png'

const Header = ({img}) => {
  return (
    <header className='header' style={{ backgroundImage: `url(${imges})` }}>
   <NavBar/>
<div className="title">
    <h2>
    No matter where you’re going to, 
     we’ll take you there
    </h2>
</div>

    </header>

    
  )
}

export default Header