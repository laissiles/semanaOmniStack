import React, {useEffect, useState} from 'react';
import {View, FlatList, Image, Text,TouchableOpacity } from 'react-native';
import logoimg from '../../assets/logo.png'
import styles from './styles';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api';

export default function Incidents(){
    const [incidents, setIncident]= useState([]);
    const [total, setTotal] = useState([0]);    
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    

    const navigation= useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detalis', {incident});

    }

    async function loadIncident(){
        if(loading){
            return;
        }

        if(total>0 && incidents.length==total){
            return;
        }

        setLoading(true);

const response = await api.get(`incidents?page=${page}`)
        
        setIncident([...incidents, ...response.data])
        setTotal(response.headers['total-casos'])
        setPage(page+1)            
        setLoading(false);

    }

    useEffect(()=>{
        
        loadIncident();
    })

    return(
        <View style={styles.container}>
            <View style ={styles.header}>
                <Image source={logoimg}/>
                <Text style={styles.headerText}>
                    total de <Text style={styles.headerTextBold}> {total} casos</Text>.

                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo</Text>

                <FlatList
                data={incidents}
                style={styles.incidentsLits}
                keyExtractor={incident =>String(incident.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached= {loadIncident}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident})=>(
                    <View  style={styles.incident}>
                    <Text style={styles.incidenPropety}>ONG</Text>
                    <Text style={styles.incidenValue}>{incident.name}</Text>

                    <Text style={styles.incidenPropety}>CASO</Text>
                <Text style={styles.incidenValue}>{incident.title}</Text>

                    <Text style={styles.incidenPropety}>VALOR:</Text>
                    <Text style={styles.incidenValue}>{Intl.NumberFormat('pt-br', 
                    { style: 'currency', 
                    currency:'BRL'
                    }).format(incident.value)}</Text>

                   <TouchableOpacity 
                   style={styles.detailsButton} 
                   onPress={()=> navigateToDetail(incident)}>
                       <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                       <Feather name="arrow-right" size={16} color="#e02041"/>

                   </TouchableOpacity >
                </View>

                )}
                
                />

            
         </View>
    );
    
}
