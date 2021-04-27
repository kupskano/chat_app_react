import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { db } from '../firebase'

const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Chat room',
            headerBackTitle: 'Chat'
        })
    }, [navigation])


    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(()=> {
            navigation.goBack("Home")
        }).catch((error)=> alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder= "Enter chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={{
                    type:'font-awesome', name: 'wechat'
                }}

            />
            <Button disabled={!input} onPress={createChat} title='Create chat'/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    }
})
