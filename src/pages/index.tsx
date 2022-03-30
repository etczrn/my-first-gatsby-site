import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/global-style'
import Introduction from 'components/main/introduction'
import Footer from 'components/common/footer'
import CategoryList from 'components/main/category-list'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <Footer />
    </Container>
  )
}

export default IndexPage
