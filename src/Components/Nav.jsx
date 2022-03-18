import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    },[])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img
        className='nav-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="NetFlix Logo" />
        <img
        className='nav-avatar'
        src="./images/avatar.png" 
        alt="NetFlix Avatar" />
    </div>
  )
}

export default Nav