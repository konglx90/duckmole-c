import React from 'react'
import { View, Editor } from '@tarojs/components'
import { PageBlock } from './block'

const Page: React.FC<{
  pageContent: any
}> = ({
  pageContent
}) => {

  console.log(pageContent, 'pageContent')

  if (!pageContent) {
    return ''
  }

  return (
    <View style={{ padding: '10px' }}>
      {pageContent.map((block) => <PageBlock block={block} />)}
      <Editor />
    </View>
  )
}

export {
  Page
}