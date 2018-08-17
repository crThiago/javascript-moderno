import React from 'react'
// QUANDO PAI IMPORTA O FILHO
// import Filho from './Filho'

// export default props =>
//     <div>
//         <h1>{props.nome} {props.sobrenome}</h1>
//         <h2>Filhos</h2>
//         <ul>
//             <Filho nome="Pedro" sobrenome={props.sobrenome} />
//             <Filho {...props} />
//             <Filho {...props} nome="Carla" />
//         </ul>
//     </div>        

import { childrenWithProps } from '../utils/utils'

//QUANDO É ESPECIFICADO O FILHO NO ARQUIVO INCLUDE.JS
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* {props.children}  RESPONSÁVEL POR RETORNAR TODOS OS FILHOS DENTRO DO PAI*/}
            {childrenWithProps(props)}
        </ul>
   </div>