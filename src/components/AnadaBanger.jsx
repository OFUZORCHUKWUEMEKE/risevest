import React from 'react'
import styled from 'styled-components'

const AnadaBanger = () => {
  return (
    <Container>
        <Wrapper>
            <Content>
                <First>
                    <Img src='/img/rise-app-phone.png'/>
                    <Card>
                       <Img style={{height:'200px',width:'100%'}} src='/img/Build wealth.png'/>
                    </Card>
                </First>
                <Second>
                      <h2 style={{fontSize:'16px'}}>The Rise App</h2>
                      <h3>Save For Your <span style={{color:'purple',fontWeight:'bold'}}>Future</span></h3>
                      <p>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.
                </p>
                  <a style={{background:'#07969E',padding:'10px 15px',marginBottom:'25px',borderRadius:'10px',cursor:'pointer',color:'white'}}>Start Saving</a>
                </Second>
            </Content>
        </Wrapper>
        <Section>
            <h1 style={{fontFamily:'sans-serif'}}>How we are Regulated</h1>
            <p style={{fontWeight:'500',fontSize:'16px',color:'#4a5050'}}>Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions</p>
        </Section>
        <Sect>
            <Wrap>
              <h1 style={{color:'#40BBC3'}}>From the people that use Rise </h1>
              {/* <p style={{fontSize='18px'}}>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p> */}
              <p style={{fontSize:'18px'}}>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals</p>
            </Wrap>
           <Main>
               <Cardd>
                   <p style={{fontSize:'16px',color:'#4A5050'}}>I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>
                   <Picture>
                       <Image  src='/img/Ellipse 196 (2).png'/>
                       <P>Jesse</P>
                   </Picture>
               </Cardd>
               <Cardd>
                 <p style={{fontSize:'16px',color:'#4A5050'}}>I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.</p>
                 <Picture>
                       <Image style={{marginBottom:'50px'}}  src='/img/Ellipse 196 (2).png'/>
                       <P style={{marginBottom:'50px'}}>Emeke</P>
                   </Picture>
               </Cardd>
               <Cardd>
                 <p style={{fontSize:'16px',color:'#4A5050'}}>I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.</p>
                 <Picture>
                       <Image style={{marginBottom:'50px'}}  src='/img/Ellipse 196 (2).png'/>
                       <P style={{marginBottom:'50px'}}>Ofuzor</P>
                   </Picture>
               </Cardd>
           </Main>
        </Sect>
        <Anot>
            <Rev>
                <h2 style={{fontFamily:'sans-serif'}}>Join The Rise Community</h2>
                <p style={{paddingTop:'40px',color:'gray'}}>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>

                <a style={{background:'teal',padding:'10px 15px' ,color:'white',marginTop:'40px'}}>Join Our Community</a>
            </Rev>

            <Imag src='/img/Vector 66.png'></Imag>

        </Anot>
    </Container>
  )
}
const Imag = styled.img`
   @media(max-width:768px){
       margin-top:40px;
   }
    
`
const Container = styled.div`
   width:90%;
   margin:auto;  
   @media (max-width:768px){
    margin-top: 1500px;
   }
 

`

const Main = styled.div`
   width:100%;
   margin:auto;
   display:flex;
   justify-content: space-between;
   @media (max-width:768px){
       flex-direction: column;
       width:80%;
       margin:auto;
   }
`

const Rev = styled.div`
flex:1;
`

const Anot = styled.div`
    display:flex;
    width:80%;
    margin:auto;
    padding: 50px;
    @media (max-width:768px){
        width:80%;
        flex-direction: column;
    }
`

const Picture = styled.div`
   display:flex;
   margin-top: 70px;
`

const Image =styled.img`
  width:42px;
  height:42px;
  object-fit: contain;
  align-self: center;
`

const P = styled.p`
   align-self: center;
   margin-left: 10px;
   color:gray;
`

const Cardd = styled.div`
   width:434px;
   height:248px;
   border-radius:10px;
   padding:24px;
    box-shadow: 0px 12px 24px 0px #2B394B26;
    font-family: 'san-sarif';
    @media (max-width:768px){
       width:240px;
    }
`

const Wrap = styled.div`
    text-align:center;
    width:50%;
    margin:auto;
    @media(max-width:768px){
        width:90%;
        margin:auto;
    }
`

const Sect = styled.div`
   width:100%;
`

const Section = styled.div`
   width:30%;
   margin:auto;
   text-align: center;
   padding:50px;
   /* linear-gradient: */
   /* background: #FFF4F0; */
   @media(max-width:768px){
       width:100%;
       margin:auto;
       padding:0px;
   }
`

const Wrapper = styled.div`
    width:80%;
    margin:auto; 
`

const Content = styled.div`
   display:flex;
   justify-content: space-between;
    width:90%;
    margin:auto;
    position : relative;
    @media(max-width:768px){
        flex-direction: column;
    }
`

const First = styled.div`
  /* width:40%; */
  flex:2;

`

const Card = styled.div`
    position: absolute;
    height: 209.19915771484375px;
    width: 300.3089904785156px;
    left: 7%;
    top: 20%;
    border-radius: 15px;
    background-color: #b49eb4;
    box-shadow: 0px 12px 24px 0px #2B394B26;

    @media(max-width:768px){
        left:0px;
        width:200px;
    }

    
    /* @media(max-width:768px){
        posi
    } */
`
const Second = styled.div`
    /* width:60%; */
    flex:1;
    align-self: center;
`

const Img = styled.img`
   width:300px;
   height:433.2px;
   flex:1;
   margin-left:40px;
   object-fit:contain;
   @media (max-width:768px){
       margin-left:0px;
       width: 200px;
   }
`



export default AnadaBanger