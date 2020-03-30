import React, {useState} from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history= useHistory();
    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };

        try {
         await api.post('incidents', data, {
             headers:{
                authorization: ongId
             }
         })
         history.push('/profile');

        } 
        catch (error) {
          alert('erro ao cadastrar caso')  
        }


    }


    
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
        <form on onSubmit={handleNewIncident}>
            <input placeholder="Titulo do caso"
            value={title}
            onChange={e=> setTitle(e.target.value)}
            
            />
            <textarea placeholder="Descrição do caso"
            value={description}
            onChange={e=> setDescription(e.target.value)}                
            /> 

            <input placeholder="valor em reais"
            value={value}
            onChange={e=> setValue(e.target.value)}            
            />

            <button className="button" type="submit">Cadastrar</button>

        </form>
    </div>
</div>
)

}
