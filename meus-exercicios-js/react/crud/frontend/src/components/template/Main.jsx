import './Main.css'
import React from 'react'
import Header from './Header'

export default props => {
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children} {/*Valores que estão dentro do main puxados do arquivo filho ex: Home.jpx*/}
            </div>
        </main>
    </React.Fragment>    
}