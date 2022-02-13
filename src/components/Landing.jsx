import React from 'react'
import styled from 'styled-components'

const Landing = () => {
  return (

       <Container className='flex mx-auto w-4/5 justify-between mt-5'>
        <Nav>
           <Text className='text-3xl w-1/5'>rise</Text>
           <List className="flex w-3/5 justify-between">
              <An className='list-none font-bold'><li>Home</li></An> 
              <An className='list-none font-bold'><li>Products</li></An> 
              <An className='list-none font-bold'><li>Investments Clubs</li></An> 
              <An className='list-none font-bold'><li>About Us</li></An> 
              <An className='list-none font-bold'><li>FAQs</li></An> 
              <An className='list-none font-bold' ><li>Blogs</li></An> 
           </List>
           <Vector src="/img/Vector (2).png"/>
       </Nav> 
        <Section>
           <Wrapper>
             <Content>
                 <Inner>
                    <Head>Dollar investments that helps you grow</Head> 
                    <Par>We put your money in high quality assets that helps you build wealth and achieve your financial goals</Par>  
                    <ButtonWrapper>
                        <Button>
                            <Inside>
                             {/* <img style={{objectFit:'contain',width:'14.3px'}} src="/img/Vector.png"/> */}
                              <p style={{fontFamily:'sans-serif',fontWeight:'400'}}>Download on the App store</p>
                            </Inside>                                                   
                        </Button>
                        <ButtonTwo>
                           <Inside>
                             {/* <img style={{objectFit:'contain',width:'14.3px'}} src="/img/Vector (1).png"/> */}
                              <p style={{marginBottom:'40px',right:'20px',top:'10px',fontFamily:'sans-serif',fontWeight:'400'}}>Download on the Play store</p>                         
                           </Inside>
                        </ButtonTwo>
                    </ButtonWrapper> 
                 </Inner>
                 <Img src="/img/rise-app-phone.png"/>
             </Content>
           </Wrapper>
        </Section>

    </Container>    
  )
}
const Container = styled.div`
   width:90%;
   margin:auto;
   margin-top:5px;
`
const Head = styled.h1`
  color: #07969E;
  font-size:56px;
  
`
const Nav = styled.nav`
    display:flex;
    width:80%;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    color: #07969E;
`
const Par = styled.p`
   font-size: 16px;
   font-style: normal;
   line-height: 24px;
   font-family:san-sarif;
   font-weight:500;
   color:#405050;

`

const Vector = styled.img`
    display:none;
    @media(max-width:768){
      display:inline-block;

    }
`
const List = styled.ul`
   display:flex;
   width:60%;
   justify-content:space-between;
   font-family: sans-serif;

`

const An = styled.a`
    font-weight:700;
    list-style:none;
    cursor:pointer;
    font-size:16px;
    line-height:19.2px;
    @media(max-width:768px){
       display:none;
    }
`

const ButtonWrapper = styled.div`
    display:flex;
    margin-top:20px;
    position:relative;
`
const Inside = styled.div`
    /* width:80px;
    position:absolute;
    display: flex;
    height:32px;
    top: 8px;
    left:48px; */
    /* position:absolute; */
    width:90%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    align-content:center;
    margin-bottom: 120px;
    top: 10px;

`
const ButtonTwo = styled.div`
    width:144px;
    border-radius:10px;
    height:68px;
    margin-left:20px;
    /* display: flex; */
    background-color: #2d2d2d;
    color:white;
    `
const Button = styled.div`
    width:144px;
    border-radius:10px;
    height:68px;
    /* display: flex; */
    background-color: #2d2d2d;
    position: relative;
    color:white;
    `

const Text = styled.h1`
   width:10%;
   font-size:30px;
   font-family: sans-serif;
`

const Section = styled.div`
   width:90%;
   margin:auto;
   margin-top:50px;
`

const Wrapper = styled.div`
  width:90%;
  margin:auto;

`

const Content = styled.div`
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    @media(max-width:768px){
      flex-direction:row;
      align-self:center;
      width:90%;
      /* margin: auto; */
      margin-left:0px;
      padding: 0px;
    }
`

const Inner = styled.div`
   flex:1;
   @media (max-width:768px){
      width:90%;
       margin:auto;
       padding:30px 0px;
   }
`
const Img = styled.img`
   width:600px;
   height:433.2px;
   flex:1;
   margin-left:40px;
   object-fit:contain;
   padding:10px;

@media(max-width:768px){
      /* margin: auto; */
      margin-left:0;
      padding: 0;
    }
`



export default Landing