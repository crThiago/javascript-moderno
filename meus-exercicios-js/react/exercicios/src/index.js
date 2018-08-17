import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'

// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componentes/BomDia'

// ReactDOM.render(<BomDia nome='Thiago' idade={20} />, document.getElementById('root'))

// import Mult, { BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <Mult.BoaTarde nome="Ana" />
//         <BoaNoite nome="Julia" />
//     </div>
// , document.getElementById('root'))

// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="Ana" />
//     </div>
// , document.getElementById('root'))

// import Pai from './componentes/Pai'

// ReactDOM.render(
//     <div>
//         <Pai sobrenome="Costa" nome="Evaldo" />
//     </div>
// , document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai sobrenome="Costa" nome="Evaldo">
            <Filho nome="Thiago" sobrenome="Costa" />
            <Filho nome="Gabriel" sobrenome="Costa" />
        </Pai>
    </div>
, document.getElementById('root'))