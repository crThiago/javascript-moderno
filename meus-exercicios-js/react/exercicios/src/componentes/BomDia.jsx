import React, {Fragment} from 'react'

// 1º OPÇÃO
export default props => [
    <h1 key='h1'>Bom dia {props.nome} sua idade é {props.idade}</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// 2º OPÇÃO
// export default props => 
//     <React.Fragment> //    <Fragment> caso estiver importado {fragment}
//         <h1>Bom dia {props.nome} sua idade é {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>        

//3º OPÇÃO
// export default props => 
//     <div>
//         <h1>Bom dia {props.nome} sua idade é {props.idade}</h1>
//         <h2>Até breve!</h2>
//     </div>