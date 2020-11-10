import React ,{useState , useEffect} from 'react';
import { StyleSheet, Image ,FlatList , SafeAreaView , ActivityIndicator , Button ,Text, TextInput, View , Alert} from 'react-native';
const studentulr = 'http://localhost:3001/students';
export default function Student ({ navigation }) {
  const [ isLoading , setLoading] =  useState(true);
const [ data , setData] =  useState([]);
const [ department , setDepartment] =  useState([]);


useEffect(()=>{

 const interval = setInterval( () => {

  fetch(studentulr)
  .then( (response) => response.json())
  .then( (json) => {console.log(json.students); setData(json.students) ; 
    setDepartment(json.name);})
  .catch((error)=> alert(error) )
  .finally(()=>setLoading(false));
}, [])} , 1000)  ;
//} , 1000)
    return (
      <SafeAreaView style={styles.container}v>
      {isLoading ? (
        <ActivityIndicator/>
      ) : (
          <View>
            <FlatList
             data={data}
             renderItem={({ item }) => (
               
                <View style={styles.container}>
                 <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.photo} />

                  <View style={styles.container_text}>
                     <Text style={styles.title}>
                     {item.id}
                    </Text>
                    <Text style={styles.title}>
                    {item.name}
                    </Text>
                    <Text style={styles.description}>
                      {item.section}
                    </Text>
                 </View>
                </View>
              )}
            />
          </View>
      )
     }
    </SafeAreaView>
    )
  }
const styles = StyleSheet.create({
   /* container: {
      flex: 1,
     // backgroundColor: '#FCFCFC',
     backgroundColor : 'lightblue',
    }*/
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginLeft:16,
      marginRight:16,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      elevation: 2,
  }, 
     title: {
      fontSize: 16,
      color: '#000',
    },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  },
  description: {
      fontSize: 11,
      fontStyle: 'italic',
  },
  photo: {
      height: 50,
      width: 50,
  },
  });