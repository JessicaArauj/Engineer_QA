import React from 'react';
import { Button, TextInputComponent } from 'react-native';

export default function MinhaView() {
    return (
        <View>
            <TextInput
                value = 'Meu Texto'
            />
            <Button
            title='Clique Aqui'
            onPress={cliqueAqui}
            />
            
        </View>
    )
}

export function cliqueAqui() {
    return true;
}
