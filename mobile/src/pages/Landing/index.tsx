import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'; //Tags exclusivas para react-native
import { useNavigation } from '@react-navigation/native' //biblioteca para utilização de rotas
import {RectButton} from 'react-native-gesture-handler' //efeitos diferenciados para botões no react-native


import styles from './styles';

//Icones e imagens importadas (para o typescript reconhecer a importação de imagens é necessário criar um arquivo de configuração, o '@types/index.d.ts')
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

//Página Landing
//A função retorna uma página para routes que por sua vez está sendo importada para App.tsx
function Landing() {

   //instanciando o navigation e criando sua função (que está sendo utilizada em um botão)
   const {navigate} = useNavigation();
   function handleNavigateToGiveClassesPage(){
      navigate('GiveClasses')
   } 


   //Retorno da Tela Landing
   return (
      <View style={styles.container}>
         <Image source={landingImg} style={styles.banner} />

         <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>O que deseja Fazer?</Text>
         </Text>

         <View style={styles.buttonsContainer}>

            <RectButton style={[styles.button, styles.buttonPrimary]}>
               <Image source={studyIcon} />
               <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>

            <RectButton onPress={handleNavigateToGiveClassesPage} 
               style={[styles.button, styles.buttonSecondary]}>
                  <Image source={giveClassesIcon} />
                  <Text style={styles.buttonText}>Dar aulas</Text>
            </RectButton>

         </View>

         <Text style={styles.totalConnections}>
            Total de 280 conexões realizadas {' '}
            <Image source={heartIcon} />
         </Text>


      </View>
   )
}

export default Landing;