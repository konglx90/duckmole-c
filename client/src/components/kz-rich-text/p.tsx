import React from 'react'
import { View } from '@tarojs/components'
import { KzNode, extractAttr } from './utils'

const KzElementP: React.FC<{
  node: KzNode
}> = ({
  node,
  children
}) => {

  const attrObj = extractAttr(node.attributes, 'style')
  
  return (
    <View className='kzn-p' style={attrObj.style}>
      {children}
    </View>
  )
}

export default KzElementP