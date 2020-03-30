import React, {useStare, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css'
import heroimg from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import api from '../../services/api';



export default function Logon(){
    const [id, setid] = useState('');
    const history = useHistory();

   async function hadleLogin(e){
        e.preventDefault();
        try {
            const response =await api.post('session', {id});
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert("Falha no login");
              }    }

    return(
       <div className="logon-container">
           <section className="form">              
             <img src={logo} alt="logo"/>

             <form onSubmit={hadleLogin}>
                 <h1> Faça seu Login</h1>
                 <input placeholder="insira seu ID" 
                 value={id}
                 onChange={e=>setid(e.target.value)}/>

                 <button className="button" type="submit">Entrar</button>
                 <Link className="back-link" to="/register">
                     <FiLogIn size={16} color="#e02041" />
                     não tenho cadastro</Link>       
             </form>     
           </section>
           <img src={heroimg} alt="Heroes"/>
       </div>
    );
}