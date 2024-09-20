
import Card from '../Components/Common/Card/Card'
import './home.css'
import { servicesData } from '../utils/Constant/service'

const Home = () => {
  return (
    <div>

      
      <div className='card_box'>
      
       <Card data= {servicesData[0]}/>
       <Card data= {servicesData[1]}/>
       <Card data= {servicesData[2]}/>
       <Card data= {servicesData[3]}/>
      </div>
    
      
    </div>
  )
}

export default Home
