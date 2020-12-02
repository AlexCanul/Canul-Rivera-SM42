import React, { useState } from "react";
import {
    Button,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
    const initalState = {
        name: "",
        email: "",
        telefono: "",
        edad: "",
        PrimApell: "",
        SegApellido: "",
    };

    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({...state, [name]: value });
    };




    const saveNewUser = async() => {
        if (state.name === "") {
            alert("please provide a name");
        } else {

            try {
                await firebase.db.collection("users").add({
                    name: state.name,
                    email: state.email,
                    telefono: state.telefono,
                    edad: state.edad,
                    PrimApell: state.PrimApell,
                    SegApellido: state.SegApellido,
                });

                props.navigation.navigate("UsersList");
            } catch (error) {
                console.log(error)
            }
        }
    };

    return ( <
        ScrollView style = { styles.container } > { /* Name Input */ } <
        View style = { styles.inputGroup } >
        <
        TextInput placeholder = "Nombre de Usuario"
        onChangeText = {
            (value) => handleChangeText(value, "name") }
        value = { state.name }
        /> <
        /View>

        { /* Input */ } <
        View style = { styles.inputGroup } >
        <
        TextInput placeholder = "Primer Apellido"
        onChangeText = {
            (value) => handleChangeText(value, "PrimApell") }
        value = { state.aPaterno }

        /> <
        /View>

        { /* Input */ } <
        View style = { styles.inputGroup } >
        <
        TextInput placeholder = "Segundo Apellido"
        onChangeText = {
            (value) => handleChangeText(value, "SegApell") }
        value = { state.aMaterno }

        /> <
        /View>

        { /* Email Input */ } <
        View style = { styles.inputGroup } >
        <
        TextInput placeholder = "Email"
        multiline = { true }
        numberOfLines = { 4 }
        onChangeText = {
            (value) => handleChangeText(value, "email") }
        value = { state.email }
        /> <
        /View>

        { /* Input */ } <
        View style = { styles.inputGroup } >
        <
        TextInput placeholder = "Numero"
        onChangeText = {
            (value) => handleChangeText(value, "telefono") }
        value = { state.telefono }
        /> <
        /View>

        { /* Input */ } <
        View style = { styles.inputGroup } >
        <
        TextInput placeholder = "Edad"
        onChangeText = {
            (value) => handleChangeText(value, "edad") }
        value = { state.edad }

        /> <
        /View>



        <
        View style = { styles.button } >
        <
        Button title = "Guardar Usuario"
        onPress = {
            () => saveNewUser() }
        /> <
        /View> <
        /ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default AddUserScreen;