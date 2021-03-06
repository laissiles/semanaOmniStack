import React, {useState}from 'react';
import logo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom' // para a rota/botão
import {FiPower, FiTrash2} from 'react-icons/fi';
import './style.css';
import { useEffect } from 'react';
import api from '../../services/api';

export default function Profile(){
    const[incidents, setincidents] = useState([])
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    
    useEffect(()=>{
        api.get('profile', {
            headers: {
                authorization:ongId,
            }
        
        }).then(response=>{
          
                setincidents(response.data)
        })
    }, [ongId]);

  async function handlDeleteFuncion(id){

        try {
await api.delete(`incidents/${id}`,{
    headers: {
        authorization: ongId,
    }
}) ; 
setincidents(incidents.filter(incident=> incident.id !== id))
        } catch (error) {
            alert('erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');


    }

    return(

        <div className="profile-container">
            <header>
                <img src={logo} alt="logo"/>
            <span>Seja bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso </Link>
                <button onClick={handleLogout}type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident=>(
                        <li key = {incident.id}>
                        <strong>CASO:</strong>     
                        <p>{incident.title}</p>
    
                        <strong>Descrição:</strong>
                        <p>{incident.description}</p> 
    
                        <strong>VALOR:</strong> 
                        <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={()=> handlDeleteFuncion(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>    
                        </button>
                    </li>
                ))}
                              
            </ul>
        </div>
    )

}