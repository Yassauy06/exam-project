import React from 'react';
import { Link } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import Character from './Character'
import Infinity from './Infinity';
import Weapons from './Weapons'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'; 

import { Layout, theme } from 'antd';
const {  Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};
const  Main = () => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  const { t } = useTranslation(); 

    return (
  
      <div className='global-div '>
        
        <nav className="navbar">
          <h2 className='jjk-logo'>Jujutsu kaisen.</h2>
         <ul className='ul-nav'>
          <Link className='link-text'  to="/Header"  spy={true}  smooth='true' offset={-50} duration={700}> 
            <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}>
            <p className='navbar-text'> {t("navbar-h")}</p>
             </li>
  
             </Link> 
            <Link className='link-text'  to="/Infinity"  spy={true}  smooth='true' offset={-50} duration={700}>
            <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> 
             <p className='navbar-text'>{t("navbar-i")}</p> </li>
            </Link>
            <Link className='link-text' to="/ImageSlider"  spy={true}  smooth='true' offset={-50} duration={700}>
            <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> 
            <p className='navbar-text'>{t("navbar-s")}</p></li>
            </Link> 
            <Link className='link-text'  to="/Character"  spy={true}  smooth='true' offset={-50} duration={700}> 
            <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}>
            <p className='navbar-text'>  {t("navbar-c")}</p>
             </li>
             </Link> 
             <Link className='link-text' to="/Weapons"  spy={true}  smooth='true' offset={-50} duration={700}>
            <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> 
            <p className='navbar-text'>{t("navbar-w")}</p></li>
            </Link>
            <Link className='link-text' to="/Footer"  spy={true}  smooth='true' offset={-50} duration={700}>
            <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> 
            <p className='navbar-text'>{t("navbar-f")}</p></li>
            </Link> 
          </ul>
          <LanguageSwitcher/>
        </nav>
  
        <div className="content">
          <section id="/Header">
            <Header />
          </section>
          <section id="/Infinity">
            <Infinity/>
          </section>
          <section id="/ImageSlider">
            <ImageSlider/>
          </section>
          <section id="/Character">
            <Character/>  

          </section>
          <section id="/Weapons"> 
            <Weapons/>
          </section>
          <section id="/Footer">
            <Footer/>
          </section>
        </div>
      </div>
   
       
     
    );
  };
export default Main;