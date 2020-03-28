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
                    <p>Faça seu cadastro!</p>
                    <Link className="back-link" to="/register">
                     <FiArrowLeft size={16} color="#e02041" />
                     não tenho cadastro</Link>



                </section>
                <form>

                </form>
            </div>
        </div>
    )
}