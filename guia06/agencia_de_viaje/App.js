import React, {useState} from 'react';
import {View, StyleSheet,Image, Text, ScrollView, Modal, Button, TouchableHighlight} from
'react-native';
const App = () =>{
  const[modalVisibleplaya, setModalVisibleplaya] = useState(false);
return(
<>
<ScrollView>

<Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {alert('Modal has been closed');}}>
<View style={styles.vistaModal}>
  <View style={styles.modal}>
    <Text style={styles.subtitulo}>IR A LA PLAYA</Text>
    <Text>El Salvador cuenta con hermosas playas a nivel Centroamerica</Text>
  <Button title="Cerrar" onPress={()=>{setModalVisibleplaye(!modalVisibleplaya)}}></Button>
  </View>
</View>
</Modal>

<View style={{flexDirection:'row'}} >
<Image style={styles.banner} source={require('./src/bg.jpg')} />
</View>

<View style={styles.contenedor}>
<Text style={styles.titulo}>Que hacer en El Salvador</Text>
<ScrollView horizontal>
  <View>
  <TouchableHighlight onPress={() => {setModalVisibleplaya(!modalVisibleplaya)}}>
    <Image style={styles.ciudad} source={require('/src/actividad1.jpg')}/>
  </TouchableHighlight>
  </View>
  
  <View>
    <Image style={styles.ciudad} source={require('./src/actividad1.jpg')}/>
  </View>
  <View>
    <Image style={styles.ciudad} source={require('./src/actividad2.jpg')}/>
  </View>
  <View>
    <Image style={styles.ciudad} source={require('./src/actividad3.jpg')}/>
  </View>
  <View>
    <Image style={styles.ciudad} source={require('./src/actividad4.jpg')}/>
  </View>
  <View>
    <Image style={styles.ciudad} source={require('./src/actividad5.jpg')}/>
  </View>
</ScrollView>

<Text style={styles.titulo}>Platillos Salvadorenos</Text>
<View>
<View>
    <Image style={styles.mejores} source={require('./src/mejores1.jpg')}/>
</View>
<View>
    <Image style={styles.mejores} source={require('./src/mejores2.jpg')}/>
</View>
<View>
    <Image style={styles.mejores} source={require('./src/mejores3.jpg')}/>
</View>
</View>

<Text style={styles.titulo}>Rutas turisticas</Text>
<View style={styles.listado}>
<View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/ruta1.jpg')} />
</View>
<View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/ruta2.jpg')} />
</View>
<View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/ruta3.jpg')} />
</View>
<View style={styles.listaItem}>
  <Image style={styles.mejores} source={require('./src/ruta4.jpg')} />
</View>
</View>


</View>
</ScrollView>
</>
);
};
const styles = StyleSheet.create({
banner:{
height:250,
flex:1
},
titulo:{
fontWeight: 'bold',
fontSize: 24,
marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
width:250,
height:300,
marginRight:10
},
mejores:{
  width: '100%',
  height:200,
  marginVertical:5
},
vistaModal:{
backgroundColor: '·000000aa',
flex:1,
},
listaItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection: 'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
modal:{
backgroundColor:'fff',
margin:50,
padding:40,
borderRadius: 10,
flex:1,
},
subtitulo:{
  fontWeight: 'bold',
  fontSize: 14,
  justifyContent: 'center',
}

});
export default App;