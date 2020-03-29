import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


export default function Register(){

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro em nossa plataforma!</p>
                    <Link className="back-link" to="/">
                     <FiArrowLeft size={16} color="#e02041" />
                     Não tenho cadastro</Link>
                </section>
                <form>
                    <input placeholder="nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                      <input placeholder="Cidade"/>
                      <input placeholder="UF" style={{width:80}}/>                
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}