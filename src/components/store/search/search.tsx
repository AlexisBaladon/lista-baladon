import React from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import { MAIN_COLOR } from '../../../constants/styles'

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.searchInputContainer}>
        <Image 
          style={styles.magnifyingGlass}
          source={require('./search.png')}
        />
        <TextInput style={styles.searchInput} placeholder='Buscar...' defaultValue=''/>
      </View>
      <View style={styles.filterContainer}>
        <Image 
            style={styles.filterImage}
            source={require('./filter.png')}
        />
      </View>
    </View>
  )
}


const FILTER_WIDTH = 35;
const FILTER_HEIGHT = 30;
const FILTER_CONTAINER_FACTOR = 1.75; 
const styles = StyleSheet.create({
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchInputContainer: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,

    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
  },
  searchInput: {
    marginVertical: 2.5,
    marginLeft: 12.5,
    width: '100%',

    color: 'gray',
    fontSize: 17.5,
  },
  magnifyingGlass: {
    width: 25, height: 25,
    marginLeft: 7.5,
  },
  filterContainer: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 12.5,
    width: FILTER_WIDTH*FILTER_CONTAINER_FACTOR,
    height: FILTER_HEIGHT*FILTER_CONTAINER_FACTOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterImage: {
    width: FILTER_WIDTH, height: FILTER_HEIGHT,
  }
})

export default Search;