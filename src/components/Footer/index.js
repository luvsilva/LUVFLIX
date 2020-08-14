import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/luvFlix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/lucasvnssilva/">
      <img className="Logo" src={Logo} alt="Lucas Informação" />
      </a>
      <p>
       Criado com React
        {' '}
        <a href="https://www.linkedin.com/in/lucasvnssilva/">
          Referências
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
