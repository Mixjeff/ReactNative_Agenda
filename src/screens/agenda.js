import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
const Cita = ({ item, eliminarPaciente }) => {
    const dialogoEliminar = id => {
        console.log('eliminando....', id);
        eliminarPaciente(id);
    }
    return (
        <View style={styles.cita}>
          <View style={styles.nombreApellidoContainer}>
            <Text style={styles.nombreApellido}>{item.paciente} {item.propietario}</Text>
          </View>
          <View style={styles.telefonoContainer}>
            <Text style={styles.telefono}>{item.telefono}</Text>
          </View>
          <View style={styles.btnEliminarContainer}>
            <TouchableHighlight
              onPress={() => dialogoEliminar(item.id)}
              style={styles.btnEliminar}
            >
              <Text style={styles.textoEliminar}>Eliminar &times;</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      cita: {
        backgroundColor: '#D6DBDF',
        borderBottomColor: '#27374D',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 5
      },
      nombreApellidoContainer: {
        flexDirection: 'row', // Coloca el nombre y el apellido en una fila
        alignSelf: 'flex-start'
      },
      nombreApellido: {
        fontSize: 18,
        marginRight: 10, 
        fontWeight: 'bold'
      },
      telefonoContainer: {
        marginTop: 10, 
        flexDirection: 'column',
        alignSelf: 'flex-start'
      },
      telefono: {
        fontSize: 28, 
        flexDirection: 'column'
      },
      btnEliminarContainer: {
        alignSelf: 'flex-end'
      },
      btnEliminar: {
        width: 85, 
        height: 35, 
        borderRadius: 25, 
        backgroundColor: '#CB2626',
        alignItems: 'center', 
        justifyContent: 'center', 
      },      
      textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
export default Cita;