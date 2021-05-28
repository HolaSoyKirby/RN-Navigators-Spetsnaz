import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props){
    const {navigation} = props;
    return(
        <View>
            <Text>
                Estas en Home
            </Text>
            <Button title='ir a Contact' onPress={()=>navigation.navigate('contact')}/>
            <Button title='ir a About' onPress={()=>navigation.navigate('about')}/>
        </View>
    )
}