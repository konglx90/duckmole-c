import React from 'react'
import { PageBlock } from './block'

const Page: React.FC<{
  pageContent: any
}> = ({
  pageContent
}) => {

  console.log(pageContent, 'pageContent')

  if (!pageContent) {
    return 'no content'
  }

  return pageContent.map((block) => <PageBlock block={block} />)
}

export {
  Page
}