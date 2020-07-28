import React from 'react';
import Logo from '../../assets/img/luvFlix.png'
import './Menu.css'
//import ButtonLink from './components/Button/Index';
import Button from '../Button'

function Menu (){
    return (
        <nav className="Menu">
            <a href="/">
                <img className= "Logo" src={Logo} alt="AluraFlix lOGO"/>
            </a>

            <Button as ="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>

        </nav>
    )
}

export default Menu;