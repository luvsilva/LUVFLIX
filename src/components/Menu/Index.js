import React from 'react';
import Logo from '../../assets/img/luvFlix.png'
import './Menu.css'
import {Link} from 'react-router-dom'
//import ButtonLink from './components/Button/Index';
import Button from '../Button'

function Menu (){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className= "Logo" src={Logo} alt="AluraFlix lOGO"/>
            </Link>

            <Button as ={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>

        </nav>
    )
}

export default Menu;