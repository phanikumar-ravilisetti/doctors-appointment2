import {
  HeaderContainer,
  AboutRoute,
  Services,
  ServicesSelect,
  ServicesContainer,
  Hr,
} from './styledComponents'

function Header() {
  return (
    <>
      <HeaderContainer>
        <AboutRoute>About</AboutRoute>
        <ServicesContainer>
          <Services htmlFor="services">Services</Services>
          <ServicesSelect id="services" />
        </ServicesContainer>
      </HeaderContainer>
      <Hr />
    </>
  )
}

export default Header
