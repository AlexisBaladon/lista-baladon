import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Category from './category'

interface IProps {
    categories: Array<string>; //TODO
}

const Categories: React.FC<IProps> = ({categories}) => {

    return (<View style={styles.categoryContainer}>
            {categories.map((cat, i) => {
                return <Category key={i} 
                    category={cat} isSelected={!((i)%9)}/>
            })} 
        </View>
  )
}

const styles = StyleSheet.create({
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    }  
})

export default Categories