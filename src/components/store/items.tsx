import React from 'react'
import { Text, View } from 'react-native'

interface IProps {
    items: Array<string>,
}

const Items: React.FC<IProps> = ({items}) => {
  return (<View>
      {items.map((item, i) => {
          return <Text key={i}>{item}</Text>
      })}
  </View>
  )
}

export default Items