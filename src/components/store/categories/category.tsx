import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { LIGHT_COLOR, NEUTRAL_COLOR, MAIN_COLOR } from '../../../constants/styles';

interface IProps {
    category: string;
    isSelected: boolean,
}

const Category: React.FC<IProps> = ({category, isSelected}) => {
    const customStyles = styles(isSelected);

    return (<TouchableOpacity style={customStyles.button}>
            <Text style={customStyles.text}>{category}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = (isSelected: boolean) => StyleSheet.create({
    button: {
        backgroundColor: isSelected? MAIN_COLOR:LIGHT_COLOR,
        borderColor: NEUTRAL_COLOR,
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 2.5, paddingHorizontal: 12,
    },
    text: {
        color: isSelected? LIGHT_COLOR:NEUTRAL_COLOR,
    }
})