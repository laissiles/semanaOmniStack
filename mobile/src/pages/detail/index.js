import React from 'react';
import {View} from 'react-native';
import styles from './styles'
import logoimg from '../../assets/logo.png'
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';



export default function Detail(){

    const navigation = useNavigation();
    const message = 'Olá, quero ajudar na caminha nova,'

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){       
     MailComposer.composeAsync({
        subject: "Heroi do caso: Caminha nova para zara",
        recipients: ['laislevine@gmail.com'],
        body: message,
     })     

    }


    function sendWhatsapp(){


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
                    <Text style={styles.incidenValue}>APAD</Text>

                    <Text style={styles.incidenPropety}>CASO</Text>
                    <Text style={styles.incidenValue}>Caminha nova pra Zara e Zeus</Text>

                    <Text style={styles.incidenPropety}>VALOR:</Text>
                    <Text style={styles.incidenValue}>100,00</Text> 
           
                  </View>  

                  <View style={styles.contacBox}>
                    <Text style={styles.heroTitle}> Salve o dia</Text>
                    <Text style={styles.heroTitle}> Seja o herói desse caso!</Text>
                    <Text style={styles.heroDescription}> Entre em contato</Text>

                    <View style={styles.action}>

                        <TouchableOpacity style={styles.actions} onPress={()=>{}}>
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
