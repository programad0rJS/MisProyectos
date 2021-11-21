/*import React, {useState} from 'react'
 import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
 const MiComponetes = ({Nombre , edad, Apellido, Tamaño }) => {
     const [Contador, setContador] = useState(10)
   return (
         <View style={Josue.Daniel}>
                         <Text style={Josue.Container}>
                             Contador: {Contador} 
                                        {Nombre} - {edad} - {Apellido}


                                        - {Tamaño} Es Mi Tamaño
                         </Text>
                      
                     <TouchableOpacity
                              onPress={() => setContador( Contador + 1)}
                      >
                           <View>
                           <Text>
                               Has ME CLick
                           </Text>
                           </View>
                      </TouchableOpacity> 
         </View>
   )
 }
 export default MiComponetes

const Josue = StyleSheet.create({
    Container: {
        textAlign: 'center',
        color: 'red',
        fontSize: 40,
        top: -15   
    },
    Daniel: {
        flex: 1,
        justifyContent: 'center'
    }
})*/

/*import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
const MiComponetes = () => {*/

  // const fecha = new Date().getFullYear();
  


  /*return (
   /*<View>
     <Text style={Josue.Container}>{fecha} </Text>
   </View>
   <View>

   </View>
  )
}


/*export default MiComponetes*/


/*const Josue = StyleSheet.create({
  Container: {
      textAlign: 'center',
      color: 'red',
      fontSize: 40,
      top: 15   
  },
 
 
})
import React from 'react'
import { Text, View } from 'react-native'

const MiComponetes = () => {
  let edad = 10
  let Edad = 20
  
  if (edad < Edad) {
   alert('Hola Mundo ')
 }
  return (
    <View>
            
    </View>
  )
}

export default MiComponetes



import React, {Fragment , useState} from 'react'
import {View , Text, StyleSheet, TouchableOpacity} from 'react-native'
const MiComponetes = () => {

  const [Contador, setContador] = useState(10)


  const Coque = new Date().getFullYear()
  return (
    <Fragment>
      <Text style={Josue.Container}>
          Hola Mundo: {Coque}
      </Text>
      <TouchableOpacity onPress={() => setContador( Contador + 1)}>
              <View>
                    <Text>
                           {Contador}
                    </Text>
              </View>
        </TouchableOpacity> 
    </Fragment>
  )
}

export default MiComponetes

const Josue = StyleSheet.create({
  Container: {
      textAlign: 'center',
      color: 'red',
      fontSize: 40,
      top: 15   
  },
 
 
})
*/

/*import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  
} from "react-native";
import * as ImagePicker from "expo-image-picker";



const MiComponetes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to camara roll is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult)

    if (pickerResult.cancelled === true) {
      return;
    }

   
  };

  let openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      // alert("Sharing, is not available on your platform");
      alert(
        `The image share is available for sharing at: ${selectedImage.remoteUri}`
      );
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

 

  return (
    <View style={styles.container}>
      <Text style={{ color: "#eee", fontSize: 20, marginBottom: 10 }}>Change this image</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200/200",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      {selectedImage ? (
        <TouchableOpacity onPress={openShareDialog} style={styles.button}>
          <Text style={styles.buttonText}>Share this Image</Text>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
  
 
  },
  button: { backgroundColor: "#BB86FC", padding: 7, marginTop: 10 },
  buttonText: { fontSize: 20, color: "#fff" },
});

export default MiComponetes;



import React from 'react'
import { View } from 'react-native'

const MiComponetes = () => {
  var Nombre = 12
  var edad = 13
  if (Nombre < edad) {
    alert('Hola')
  }
  return (
   <View>
     
   </View>
  )
}

export default MiComponetes
*/