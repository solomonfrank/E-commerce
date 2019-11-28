import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import Donut from '../../lib/DonutChart'
import BarChart from '../../lib/BarChart'
import StickyHeadTable from '../../lib/order'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';
import CartNavHeader from '../../components/CartNavHeader/CartNavHeader';
import { Box, DashboardBox, Header,  SaleBox, SaleDetail, H3, H4 } from './dashboard.style'

import './dashboard.style.js';
import './dashboard.scss';


class Dashboard extends Component {

 render() {
    return (
      <div className='body__template'>
        <div className='sidebar__section'>
        <div className='logo__box'  >
        <Link className='logo__box--title'  to='/'>Market-Hub</Link>
        {/* <img className='logo' src='images/logo4.png' alt='marketHub_Logo'/> */}
        </div>
        <ToggleIcon />
       
        <SideBar />
        
        </div>
        <section className='main__section content'>
        <CartNavHeader />

        <DashboardBox>
          <Box>
            <i className='icon-overview ion-android-person'></i>
         <p>Account Overview</p>
           </Box>
           <Box>
             <i className='icon-overview ion-ios-cart'></i>
         <p>Orders</p>
           </Box>
           <Box>
           <i className=' icon-overview ion-card'></i>
         <p>Payment</p>
           </Box>
           <Box>
           <i className=' icon-overview ion-podium'></i>
         <p>History</p>
           </Box>
          
        </DashboardBox>

       <SaleBox>
     
       
   <SaleDetail>
       
       <H3>Profile Summary</H3>
       <p className='user-info'><i className=' icon ion-person'></i> Name: John Doe</p>
       <p  className='user-info'><i className='icon ion-android-mail'></i> Email: JohDoe@test.com</p>
       <p  className='user-info'><i className='icon ion-ios-telephone'></i>phone: 08024466252</p>
       <p  className='user-info'> <i className='icon ion-ios-location'></i>store address: plot 245 Samuel Ajayi, Victoria Island</p>
  
     <Link to='#' className='edit-profile'> Edit Profile</Link>

   </SaleDetail>

   <SaleDetail>
       
       <H3>Total Sale</H3>
       <div className='row-sale'>
     <div className='daily-total left'>
       <p className='amt-total'>360000</p>
       <p>Online Sale</p>
     </div>
     <div className='daily-total right'>
       <p className='amt-total'>60000</p>
       <p>Sales in store</p>
     </div>

    
</div>
    <div className='graph'>
    <Donut />
    </div>


   </SaleDetail>
   <SaleDetail>
       
       <H3>Total Revenue</H3>
      <h3 >$200000</h3>
    <div className='graph'>
    <BarChart />
    </div>


   </SaleDetail>


         
       </SaleBox>

     <div className='rows'>
     <StickyHeadTable/>
     </div>
        
      
     
        
        </section>

      
     
        
      </div>
      )
    }
}

export default Dashboard;
