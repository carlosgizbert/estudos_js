import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho.jsx'

ReactDOM.render(
  <div>
    <Pai nome="Pedro" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" sobrenome="Silva" />
      <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
  </div>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <Saudacao tipo="Bom Dia" nome="Bia" />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <div>
//     <BomDia nome="Carlos" />
//     <Multi.BoaTarde nome="Lilo" />
//     <BoaNoite nome="Stitch" />
//   </div>,
//   document.getElementById('root')
// )
