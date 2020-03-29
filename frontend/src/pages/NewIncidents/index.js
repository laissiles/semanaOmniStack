import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

export default function NewIncident(){
return(
    <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logo} alt="logo"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva seu caso com o máximo de detlahes</p>
            <Link className="back-link" to="/profile">
             <FiArrowLeft size={16} color="#e02041" />
             Voltar para a home</Link>
        </section>
        <form>
            <input placeholder="Titulo do caso"/>
            <textarea placeholder="Descrição do caso"/>
            <input placeholder="WhatsApp"/>
            <input placeholder="valor em reais"/>

            <button className="button" type="submit">Cadastrar</button>

        </form>
    </div>
</div>
)

}
