import React from 'react';
import {View, FlatList, Image, Text,TouchableOpacity } from 'react-native';
import logoimg from '../../assets/logo.png'
import styles from './styles';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function Incidents(){

    const navigation= useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detalis');

    }

    return(
        <View style={styles.container}>
            <View style ={styles.header}>
                <Image source={logoimg}/>
                <Text style={styles.headerText}>
                    total de <Text style={styles.headerTextBold}> 0 casos</Text>.

                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo</Text>

                <FlatList
                data={[1,2,3]}
                style={styles.incidentsLits}
                keyExtractor={incident =>String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <View  style={styles.incident}>
                    <Text style={styles.incidenPropety}>ONG</Text>
                    <Text style={styles.incidenValue}>APAD</Text>

                    <Text style={styles.incidenPropety}>CASO</Text>
                    <Text style={styles.incidenValue}>Caminha nova pra Zara e Zeus</Text>

                    <Text style={styles.incidenPropety}>VALOR:</Text>
                    <Text style={styles.incidenValue}>100,00</Text>

                   <TouchableOpacity 
                   style={styles.detailsButton} 
                   onPress={navigateToDetail}>
                       <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                       <Feather name="arrow-right" size={16} color="#e02041"/>

                   </TouchableOpacity >
                </View>

                )}
                
                />

            
         </View>
    );
    
}
