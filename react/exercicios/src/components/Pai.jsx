import React from 'react';

function childrenWithProps(props){
    React.Children.map(props.children, child => {
      return React.cloneElement(child, { ...props, ...child.props })
    })
}

const p = props => 
  <div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
      <ul>
          {  
          childrenWithProps(props)
          }
      </ul>
  </div> 

export default p