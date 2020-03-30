import React, {useState} from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api';



export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] =useState('');
    const [city, setCity]= useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();// para "evitar" o reload da pagina

        const data ={
           name,
           email,
           whatsapp,
           city,
           uf,
        };
     try{

        const response= await api.post('ongs', data)//ong vem da rota da api
        alert(`seu id de acesso: ${response.data.id}`);
        history.push('/');

     }catch(err){
         alert("erro no cadastro!");
     }

    }
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
                <form onSubmit={handleRegister}>

                    <input placeholder="nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input type="email" placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                    <input placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e=> setWhatsapp(e.target.value)}/>

                    <div className="input-group">
                      <input placeholder="Cidade"
                      value={city}
                      onChange={e=> setCity(e.target.value)}/>

                      <input placeholder="UF"
                      value={uf}
                      onChange={e=> setUF(e.target.value)}
                      
                      style={{width:80}}/>                
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}