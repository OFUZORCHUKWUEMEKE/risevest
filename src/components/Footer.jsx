import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
     <Container>
         <Wrapper>
             <Ul>
                 <Li style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Rise</Li>
                 <Li>About Us</Li>
                 <Li>Career</Li>
                 <Li>Faqs</Li>
                 <Li>Contact Info</Li>
                 <Li>Press</Li>
                 <Li>Rise Impact</Li>
             </Ul>
             <Ul>
                 <Li style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Explore</Li>
                 <Li>Investments Club</Li>
                 <Li>Blog</Li>
                 <Li>Faqs</Li>
                 <Li>Contact Info</Li>
                 <Li>Press</Li>
                 <Li>Rise Impact</Li>
             </Ul>
             <Ul>
                 <Li style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Products</Li>
                 <Li>Rise App</Li>
                 <Li>Wallets</Li>
                 <Li>Assets Classses</Li>
                 <Li>Faqs</Li>
                 <Li>Contact Info</Li>
                 <Li>Press</Li>
             
        </Ul>
             <Ul>
                 <Li style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Contact Us</Li>
                 <Li>08035677187</Li>
                 <Li>uniben@gmail.com</Li>
                 <Li>Twitter</Li>
                 <Li>Contact Info</Li>
                 <Li>Instagram</Li>
                 <Li>Facebook</Li>
             </Ul>
         </Wrapper>
     </Container>
  )
}
const Container = styled.div`
    width:90%;
    margin:auto;
    height:415px;
    @media(max-width:768px){
        margin-top: 430px;
    }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items:center;
  @media(max-width:768px){
      flex-direction: column;
      align-content: flex-start;
  }
`
const Ul = styled.ul`
    margin-top :100px;
    align-self: center;
    
    display: flex;
    flex-direction: column;
    @media (max-width:768px){
        align-self: flex-start;
    }
`

const Li = styled.li`
    list-style:none;
    margin-top: 20px;
`

export default Footer