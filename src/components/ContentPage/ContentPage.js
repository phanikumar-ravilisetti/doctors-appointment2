import {useContext} from 'react'

import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import HeadingContext from '../../context/HeadingContext'

import {
  ContentPageContainer,
  ContentPageImg1,
  ContentContainer,
  Content,
  ContentDescription,
  GetStartedBtn,
  ContentPageImg2,
} from './styledComponents'

function ContentPage() {
  const {heading} = useContext(HeadingContext)
  return (
    <>
      <Header />
      <ContentPageContainer>
        <ContentPageImg1 src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752406988/Frame_26086340_1x_h1s7yd.png" />
        <ContentContainer>
          <Content>{heading}</Content>
          <ContentDescription>
            Powerful AI solutions that go beyond mere data sorting and
            exploration. Use our array of AI enabled solutions that understand
            your business and recommend the optimal way forward. 
          </ContentDescription>
          <GetStartedBtn>Get started</GetStartedBtn>
        </ContentContainer>
        <ContentPageImg2 src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1752408021/Asset_5_1_1x_bca6z0.png" />
      </ContentPageContainer>
      <LandingPage />
    </>
  )
}

export default ContentPage
