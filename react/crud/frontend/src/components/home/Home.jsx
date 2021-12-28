import React from 'react'
import './Home.css'

import Main from '../template/Main'

const home = props => 
  <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React.">
  <div className="display-4">Bem Vindo!</div>
  <hr />
  <p className="mb-0">Sistema para exmeplificar a construção de um cadastro desenvolvido em React</p>
</Main>


export default home