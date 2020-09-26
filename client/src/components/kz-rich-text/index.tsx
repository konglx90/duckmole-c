import React from 'react'
import { View } from '@tarojs/components'
import { parse } from './himalaya/index'

interface Node {
  tagName?: string
  type: 'element' | 'text'
  children?: Node[]
  content?: string
  attributes?: { key: string, value: string }[]
}

const extractAttr = (attributes, key) => {
  return attributes?.reduce((acc, cur) => {
    return cur.key === key ? cur.value : acc
  }, undefined)
}

const KzNodes: React.FC<{
  nodes?: Node[]
}> = ({
  nodes
}) => {
  return nodes?.map(node => {

    const attrStyle = extractAttr(node.attributes, 'style')

    if (node.tagName === 'p') {
      return <View className='kzn-p' style={attrStyle}>
        <KzNodes nodes={node.children} />
      </View>
    }

    if (node.type === 'text') {
      return node.content
    } 

    return (
      <View>PAGE ERROR !!!</View>
    )
  })
}

const KzRichText: React.FC<{
  html: string
}> = ({
  html
}) => {
  const nodes = parse(html)
  return <KzNodes nodes={nodes} />
}

export default KzRichText