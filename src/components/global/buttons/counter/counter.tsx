import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import getStyles from './counter.styles';

interface IProps {
    addCharacter: string;
    decCharacter: string;
    addToCounter: (addedCount: number) => void;
    count: number;
    decToCounter: (decCount: number) => void;
    height?: number | string;
    width?: number | string;
}

const Counter: React.FC<IProps> = ({
        addCharacter,
        decCharacter, 
        addToCounter, 
        count, 
        decToCounter,
        height=80, 
        width=25
    }) => {

    const styles = getStyles(height, width);

    const onChangeCount = (text: string) => {
        const inputCount = Number.parseInt(text);
        if (!Number.isNaN(inputCount)) {
            const addedCount = inputCount - count;
            if (addedCount > 0) addToCounter(addedCount);
            else decToCounter(-addedCount);
        }
    }

    return (<>
        <View style={styles.counter}>
            <TouchableOpacity style={styles.addDecButton} onPress={() => addToCounter(1)}>
                <Text style={styles.text}>
                    {addCharacter}
                </Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.text}
                keyboardType={'numeric'} 
                onChangeText={onChangeCount}
                value={count.toString()}
            />
            <TouchableOpacity style={styles.addDecButton} onPress={() => decToCounter(1)}>
                <Text style={styles.text}>
                    {decCharacter}
                </Text>
            </TouchableOpacity>
        </View>
    </>
    )
}


export default Counter;