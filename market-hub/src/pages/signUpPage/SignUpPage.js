import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../../components/AboutUs/AboutUs';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';
import SignUpForm from '../../components/Form/SignUpForm';

import './signUpPage.scss';


class SignUpPage extends Component {

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
          <SignUpForm />
        </section>
        <section className='about__section'>
          <AboutUs />
        </section>
        <footer className='footer__section'>
          <Footer />
        </footer>
      </div>
      )
    }
}

export default SignUpPage;
