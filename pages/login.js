import React ,{useState , useEffect} from 'react';
import { StyleSheet, TextInput ,Button, Image ,Text, View } from 'react-native';
import {zagalogo} from '../image/zagalogo.png';

export default function Login ({navigation}) {
    const [user, onChangeUser] = useState('user id');

    const [password, onChangePassword] = useState('');
    
    return (
        <View style={styles.container}>
          <TextInput style={styles.input}
            value={user}
            onChangeText= { text => onChangeUser(text) }
            placeholder={user}
          />

          <TextInput style={styles.input}
            value={password}
            onChangeText={ text => onChangePassword(text)}
          />
          <Button
          title={'Login'}
          style={styles.input}
          onPress={() => navigation.navigate('Students')}
        />
        </View>
        
    );
  };
  const styles = StyleSheet.create({
    container: {
        flex : 1,
     backgroundColor: 'lightblue',
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: '#ecf0f1',
    },
    txtInput1 : {
        width: 200,
        fontFamily: 'Baskerville',
        fontSize: 20,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 10,
        borderBottomWidth: 1,
        marginLeft:10,
       marginRight:10,
    
      },
      txt: {
       
        color:'blue',
        //textAlign: 'left'
    
      },
    logo: {
      flex: 1,
      width: "100%",
      resizeMode: "contain",
      alignSelf: "center"
    },
    form: {
      flex: 1,
      justifyContent: "center",
      width: "80%"
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign:'center',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
  });