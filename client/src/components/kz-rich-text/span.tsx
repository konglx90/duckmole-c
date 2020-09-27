import React from 'react'
import { Text } from '@tarojs/components'
import { KzNode, extractAttr } from './utils'

/**
 * todo
 * 
 * 1. lazy load
 * 2. default Image
 * 3. 可能还有一些兼容性的工作
 */

const KzElementSpan: React.FC<{
  node: KzNode
}> = ({
  node,
  children
}) => {

  const attrObj = extractAttr(node.attributes, ['style'])

  return (
    <Text
      className='kzn-span'
      style={attrObj.style}
    >
      {children}
    </Text>
  )
}

export default KzElementSpan