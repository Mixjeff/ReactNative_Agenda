import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Cita from "./agenda";
import Formulario from "./formulario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
const Contacts = () => {
  const [citas, setCitas] = useState([]);
  const [mostrarForm, guardarMostrarForm] = useState(false);
  useEffect(() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem("citas");
        if (citasStorage) {
          setCitas(JSON.parse(citasStorage));
        }
      } catch (error) {
        console.log(error);
      }
      console.log(error);
    };
    obtenerCitasStorage();
  }, []);
  //Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    const citasFiltradas = citas.filter((cita) => cita.id != id);
    setCitas(citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  };

  //muestra u oculta el formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };
  //ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };
  //Almacenar las citas en el storage
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem("citas", citasJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.contenedor}>        

        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Agregar contacto</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrarForm={guardarMostrarForm}
                guardarCitasStorage={guardarCitasStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0
                  ? "Agenda"
                  : "Agenda vacia, crea una"}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item }) => (
                  <Cita item={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              ></FlatList>
            </>
          )}
        </View>
     
      <TouchableHighlight style={styles.botonCircular}>
        <Icon
          onPress={() => mostrarFormulario()}
          name={mostrarForm ? "times" : "plus"}
          size={20}
          color="white"
        />
      </TouchableHighlight>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  titulo: {
    color: "white",
    backgroundColor:'#27374D',
    marginTop: Platform.OS === "ios" ? 40 : 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: "bold",
    height: 50,
    padding: 5,
    borderRadius: 20,
    maxWidth: 320,
    marginLeft: 20
  },
  contenido: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  botonCircular: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#27374D", 
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 330,
    marginBottom: 15
  },
});

export default Contacts;
