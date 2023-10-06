import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TextInput, TouchableHighlight, Alert, ScrollView
} from 'react-native';
import shortid from "react-id-generator";

const Formulario = ({ citas, setCitas, guardarMostrarForm, guardarCitasStorage }) => {
    //const para form:
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
 
    const crearNuevaCita = () => {
        // Si los input estan mal:
        if (paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '') {
            mostrarAlerta();
            return;
        }
        // Crear cita:
        const cita = { paciente, propietario, telefono };
        cita.id = shortid();
         console.log(cita);
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);
        // Pasar las nuevas citas a storage
        guardarCitasStorage(JSON.stringify(citasNuevo));
        guardarMostrarForm(false);// Ocultar el formulario
        guardarPropietario('');
        guardarPaciente('');
        guardarTelefono('');
    }
    // Alert de campos vacios
    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios', 
            [{
                text: 'Ok'
            }]
        )
    }
    return (
        <>
            <ScrollView style={styles.formulario}>

                <View>                    
                    <TextInput placeholder='Nombre'
                        style={styles.input}
                        onChangeText={texto => guardarPaciente(texto)}
                    />
                </View>

                <View>                   
                    <TextInput
                        placeholder='Apellido'
                        style={styles.input}
                        onChangeText={texto => guardarPropietario(texto)}
                    />
                </View>

                <View>                   
                    <TextInput
                    placeholder='Telefono'
                        style={styles.input}
                        onChangeText={texto => guardarTelefono(texto)}
                        keyboardType='numeric'
                    />
                </View>
                                         
                <View>
                    <TouchableHighlight onPress={() => crearNuevaCita()}
                        style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Nuevo Contacto</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    formulario: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        marginTop: 5        
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 30,
        height: 50,
        borderColor: '#800080',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,        
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#27374D',
        marginVertical: 10,
        marginTop: 40,
        borderRadius: 50,
        width: 180,
        marginLeft: 80
    },
    textoSubmit: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Formulario;
