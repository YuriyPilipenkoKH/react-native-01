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

import User from "../../assets/img/user.png";
import CustomStatusBar from "../CustomStatusBar/CustomStatusBar";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const PostsScreen =() => {

    return (
        <View style = {styles.background}>
        <CustomStatusBar/>

        <View style = {styles.postsScreen}>
        <View style={styles.titleWrapp}>
            <Text style={styles.title}>
              Публікації
            </Text>
            <TouchableOpacity style={styles.trayArrowBtn}>
            <MaterialCommunityIcons style = {styles.trayArrow} name="tray-arrow-up" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.user}>
            <View style={styles.imgContainer}>
                 <Image style={styles.userAvatar} source={User} />
            </View>
            <View style={styles.userWrapp}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>

            </View>
        </View>

        <View style = {styles.footer}>
        <TouchableOpacity style={styles.icon}>
             <Feather name="grid" size={24} color="#212121" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconPlus}>
            <AntDesign name="plus" size={14} color="#eee" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
             <Feather name="user" size={24} color="#212121" /> 
        </TouchableOpacity>


        </View>
           <View style = {styles.homeIndicator} ></View>
        </View>
        </View>
        
    )
}
export default PostsScreen

const styles = StyleSheet.create({
    background: {
        width:'100vw',
        minHeight:'100vh',
       
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        
    },

    postsScreen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        gap: 32,
        height: '100%',
        alignItems: 'flex-start', // Align items to the start (top) of the container
    },
    titleWrapp: {
        position: 'relative',
        height: 44,
        width: '100vw',
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        borderBottomStyle: 'solid',
        
    },
    title: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: 500,
        textAlign: 'center',
    },
    trayArrowBtn: {
        position: 'absolute',
        right: 16,
    },
    trayArrow: {
        transform: 'rotate(90deg)' ,
        color: '#bdbdbd',
    },
    user: { 
        flex: 1,
        height: '100%',
        display: 'flex',

        flexDirection: 'row',
        alignSelf: 'stretch', // Stretch the main content to fill the width
        gap: 12,
        paddingLeft: 16,
        paddingRight: 16,
 
    },
    userWrapp: {
        height: 60,
        justifyContent: 'center',
    },

    userName: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: 600,
        
    },
    userEmail: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontSize: 13,
    },
    imgContainer: {
        
       
      },
      userAvatar: {
        width: 60,
        height: 60,
      },

      footer: {
        height: 83,
        paddingTop: 9,
        paddingBottom: 34,
        borderTopWidth: 1,
        borderTopColor: '#777',
        borderTopStyle: 'solid',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        gap: 32,
        justifyContent: 'center',
        alignItems:'center',
        aligntSelf: 'center',
        
      
      },
      icon: {
        padding:12,
      },
      iconPlus: {
        width:70,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#FF6C00',
        borderRadius: 20,
      },
      homeIndicator : {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
        width: 134,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#212121',
        
    },
})

