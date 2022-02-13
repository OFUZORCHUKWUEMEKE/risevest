import React from 'react'
import styled from 'styled-components'
const Block = ({direction,head,content,image}) => {
  return (
    <Container>
        <Content>
           { direction==='left' ? (
             <Wrapper>
                 <Left>
                   <Text>{head}</Text>
                   <Pra>{content}</Pra>
                   <br/>
                   <Pre>Start Investing Now</Pre>  
                </Left>                  
                <Img src={image}/> 
               
             </Wrapper>
  
           ):(
            <Wrapper>
              <Img src={image}/>
              <Left>
                 <Text>{head}</Text>
                <Pra>{content}</Pra>
                <br/>
                <Pre>Start Investing Now</Pre>   
              </Left>   
                  
            </Wrapper>   
           )}
        </Content>
    </Container>
  )
}

const Container = styled.div`
    /* width:80%;
    margin:auto; */
`

const Content = styled.div`
     width:75%;
     margin:auto;
`
const Wrapper = styled.div`
   /* display:grid; */
   display: flex;
   align-content: center;
   height:400px;
   @media(max-width:758px){
      flex-direction:column;
      padding: 50px 0px;
   }
   /* grid-template-columns: 1fr 1fr; */
`
const Left = styled.div`
   flex:1;
   align-self: center;
   @media(max-width:768px){
      margin-top:30px;
   }
`
const Pra = styled.div`
   color:#4a5050;
`

const Text =styled.h1`
   font-weight:600;
   font-size: 32px;
   line-height: 28.8px;
   color:#2d2d2d;
`

const Pre = styled.span`
    color: #07969E;
    font-size:18px;
    margin-top:15px;
`

const Img = styled.img`
  /* flex:2; */
  width:460px;
  height:480px;
  object-fit: contain;
  @media(max-width:768px){
     width:300px
  }
  
`

export default Block