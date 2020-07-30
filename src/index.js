import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video/index.js'
import CadastroCategoria from './pages/cadastro/Categoria';

 //Desafio Master Na descrição --- Criar um Componente da Página 404
  const Pagina404 = () => (<div>Página 404</div>)
  
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


