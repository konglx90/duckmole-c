import React from 'react'
import { Element } from '../element/index'
import { View } from '@tarojs/components'
import './style.less'

const PageBlock: React.FC<{
  block: any
}> = ({
  block
}) => {
  const rootClassName = block.type ? `page-block__${block.type}` : ''

  return (
    <View className={rootClassName}>
      {block.children.map(element => <Element {...element} />)}
    </View>
  )
}

export {
  PageBlock
}