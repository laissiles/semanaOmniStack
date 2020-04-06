import React from 'react';
import {View} from 'react-native';
import styles from './styles'
import logoimg from '../../assets/logo.png'
import {Image, Text, TouchableOpacity,Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';



export default function Detail(){
   


    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    
    const message = `Olá, gostaria de ajudar com o valor de ${Intl.NumberFormat('pt-br', 
    { style: 'currency', 
    currency:'BRL'
    }).format(incident.value)}` 

    

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){       
     MailComposer.composeAsync({
        subject: `Herói do caso:${incident.title} `,
        recipients: [incident.email],
        body: message,
     })     

    }


    function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    return(
        <View style={styles.containner}>
            <View style={styles.container}>
            <View style ={styles.header}>
                <Image source={logoimg}/>
                
               <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#e02041"/>

               </TouchableOpacity>
            </View>

            <View style={styles.incident}>
            <Text style={styles.incidenPropety}>ONG</Text>
    <Text style={styles.incidenValue}>{incident.name} de {incident.city}-{incident.uf}</Text>

                    <Text style={styles.incidenPropety}>CASO</Text>
    <Text style={styles.incidenValue}>{incident.title}</Text>

    <Text style={styles.incidenPropety}>Descrição</Text>
    <Text style={styles.incidenValue}>{incident.description}</Text>

                    <Text style={styles.incidenPropety}>VALOR:</Text>
    <Text style={styles.incidenValue}>{Intl.NumberFormat('pt-br', 
                    { style: 'currency', 
                    currency:'BRL'
                    }).format(incident.value)}</Text> 
           
                  </View>  

                  <View style={styles.contacBox}>
                    <Text style={styles.heroTitle}> Salve o dia</Text>
                    <Text style={styles.heroTitle}> Seja o herói desse caso!</Text>
                    <Text style={styles.heroDescription}> Entre em contato</Text>

                    <View style={styles.action}>

                        <TouchableOpacity style={styles.actions} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.actions} onPress={sendEmail}>
                            <Text style={styles.actionText}>Email</Text>
                        </TouchableOpacity>

                    </View>
                    </View>                 
          
            </View>
           </View>



        
    );
    
}
