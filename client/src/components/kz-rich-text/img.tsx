import React from 'react'
import { Image } from '@tarojs/components'
import { KzNode, extractAttr } from './utils'

/**
 * todo
 * 
 * 1. lazy load
 * 2. default Image
 * 3. 可能还有一些兼容性的工作
 */

const KzElementImg: React.FC<{
  node: KzNode
}> = ({
  node,
}) => {

  const attrObj = extractAttr(node.attributes, ['style', 'src'])

  return (
    <Image
      className='kzn-img'
      style={attrObj.style}
      src={attrObj.src}
      mode='widthFix'
    />
  )
}

export default KzElementImg