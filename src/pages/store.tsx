import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/global/header'
import Navbar from '../components/global/navbar'
import Categories from '../components/store/categories/categories'
import Items from '../components/store/items'
import Search from '../components/store/search/search'

const Store = () => {
  return (<>
    <Header />
    <Search />
    {/* TODO: HACER CONTAINER */}
    <Categories categories={['Todo','Paletas','Postres','Personalizado']} />
    <Items items={['Item1', 'Item2', 'Item3', 'Item4']} />
    <Navbar />
  </>
  )
}

export default Store