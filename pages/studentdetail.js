import 'react-native-gesture-handler';
import React , {useState , useEffect} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function StudentDetail ({ navigation }) {

  const [name, setName] = useState('');

  const [section, setSection] = useState('');
  const [id, setId] = useState('');


  
const postData = (name , section , id) => {
  var dataToSend = {title: name , section: section  };
  console.log('post' , dataToSend);
  fetch('http://localhost:3001/poststudent?' + 'name=' + name + 
  '&section=' + section + '&id=' + id, {
    method: 'GET', //Request Type
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
   // body: JSON.stringify(dataToSend),
   
  })  
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //alert(JSON.stringify(responseJson));
     
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });

};


    return (
      <View style={styles.container}>
        <View>
        <Text> Student Id </Text>
        <TextInput style={styles.input}
          onChangeText={text => setId(text)}
          value={id}
        />
        </View>

        <View>
        <Text>Student Name </Text>
        <TextInput style={styles.input}
          value={name}
          onChangeText={text => setName(text)}

        />
        </View>
        <View>
        <Text> Section </Text>
        <TextInput style={styles.input}
          onChangeText={text => setSection(text)}
          value={section}
        />
        </View>
        <Button title="Submit" onPress={ ()=> 
          postData(name,section , id)} />
       
      </View>
    );
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFCFC',
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });