import React, {useState} from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet,  View } from 'react-native'
import { Button, Text, Input} from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imgUrl, setImageUrl] = useState("");


    



    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoUrl: imgUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            })
        }).catch((error) => alert(error.message))
    }
    return (
        <KeyboardAvoidingView  style={styles.container} >
            <StatusBar />
            <Text h3 style={{marginBottom: 50}}>
                Create account 
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                placeholder='Fullname' 
                type='text' 
                value={name} 
                onChangeText={(text) => setName(text)} />

                <Input 
                placeholder='Email'  
                type='text' 
                value={email} 
                onChangeText={(text) => setEmail(text)} />

                <Input 
                placeholder='Password' 
                secureTextEntry  
                type='password' 
                value={password} 
                onChangeText={(text) => setPassword(text)} />

                <Input 
                placeholder='Profile picture url (Optional)'  
                type='text' 
                value={imgUrl} 
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}
                />
            </View>

            <Button
            containerStyle={styles.button} 
            raised 
            onPress={register} 
            title="Register" />
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
