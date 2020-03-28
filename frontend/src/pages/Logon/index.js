import React from 'react';
import './styles.css'
import heroimg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'


export default function Logon(){

    return(
       <div className="logon-container">
           <section className="form">              
             <img src={logo} alt="logo"/>

             <form>
                 <h1> Faça seu Login</h1>
                 <input placeholder="insira seu ID" />
                 <button className="button" type="submit">Entrar</button>
                 <a href="/register">
                     <FiLogIn size={16} color="#e02041" />
                     não tenho cadastro</a>



                           


             </form>
            



           </section>
           <img src={heroimg} alt="Heroes"/>
       </div>
    );
}