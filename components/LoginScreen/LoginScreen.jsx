// import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
 
} from "react-native";
import BackgroundImage from "../../assets/img/photo-bg.jpg";
import CustomStatusBar from "../CustomStatusBar/CustomStatusBar";


const LoginScreen =() => {


    return (
        <ImageBackground style = {styles.background} source={BackgroundImage}>
            <CustomStatusBar/>

    <View style = {styles.registration}>

     
    <Text style={styles.title}>Увійти</Text>

    <View style={styles.form}>

      <TextInput
        style={styles.input}
        placeholder="Адреса електронної пошти"
        placeholderTextColor="#bdbdbd"

      />
      <View style = {styles.inputWrapp}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#bdbdbd"
            // secureTextEntry={true}
          />
          <TouchableOpacity   style={styles.showPassword}  >
                    <Text style={styles.textShow}>
                            Показати
                    </Text>
            </TouchableOpacity>
      </View>
    <View style={styles.btnWrapp}>
      <TouchableOpacity style={styles.regBtn}>
        <Text style={styles.regBtn__text}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.alreadyHaveAccount}>
        <Text style={styles.alreadyHaveAccountText}>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>

    </View>
     <View style = {styles.homeIndicator} ></View>
    </View>
        

      </ImageBackground>
    )
}
export default  LoginScreen

const styles = StyleSheet.create({
    background: {
        width:'100vw',
        minHeight:'100vh',
       
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    registration: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: 489,
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingTop: '32px',
        paddingRight: '16px',
        paddingBottom: '8px',
        paddingLeft: '16px',
    },
    photoWrapp: {
        position: 'absolute',
        top: -60,
        transform: [{ translate: '(-50%, -50%)' }],

        width: 120,
        height: 120,
        backgroundColor: '#f6f6f6',
        borderRadius: 16,

    },
    plus: {
        
        position: 'absolute',
        top: 70,
        right: -10,
        color: '#FF6C00',
        backgroundColor: '#fff',
        borderRadius: '50%',
    },
    title: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
    },
    input: {
       
        width: 343,
        height: 50,
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
        padding: 16,
        color: '#212121',
        borderWidth: 1,
         borderColor: "#bdbdbd",

        outlineColor: 'orange', // Outline color when focused
        outlineWidth: 1, // Outline width when focused
     
    },
    alreadyHaveAccount: {
        padding: 2,
        textAlign: 'center',
       
    },
    alreadyHaveAccountText: {
        color: '#1B4371',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        alignItems: 'center',
        
    },
    btnWrapp: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginTop: 30,
    },
    regBtn: {
        backgroundColor: '#FF6C00',
        height: 51,
        width: 343,
        borderRadius: 25,
        padding: 16,
        textAlign: 'center',
        
  
    },
    regBtn__text: {
        color: '#eee',
        fontFamily: 'Roboto',
        fontSize: 16,

        
    },
    inputWrapp: {
        position: 'relative',
    },
    showPassword: {
        position: 'absolute',
        top: 15,
        right: 16,

    },
    textShow: {
        fontFamily: 'Roboto',
        color: '#1B4371',
        fontSize: 16,
    },
    homeIndicator : {
        position: "absolute",
        bottom: 10,
        width: 134,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#212121',
        
    }
  });