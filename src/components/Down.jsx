import styled from 'styled-components';


const Down = ()=>{
    return (
        <Container

        >
            <Wrapper>
                <Content>
                    <Stuff style={{fontFamily:'sans-serif'}}>
                        <p style={{color:'teal'}}>Download The rise App</p>

                        <h2 style={{fontFamily:'sans-serif'}}>Join our 100,000 users investing and setting long term goals!</h2>
                        <p style={{color:'gray'}}>Dollar investments that help you grow.</p>

                        <ButtonWrapper>
                        <Button>
                            <Inside>
                             {/* <img style={{objectFit:'contain',width:'14.3px'}} src="/img/Vector.png"/> */}
                              <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Download on the App store</p>
                            </Inside>                                                   
                        </Button>
                        <ButtonTwo>
                           <Inside>
                             {/* <img style={{objectFit:'contain',width:'14.3px'}} src="/img/Vector (1).png"/> */}
                              <p style={{marginBottom:'40px',right:'20px',top:'10px',fontFamily:'sans-serif',fontWeight:'bold'}}>Download on the Play store</p>                         
                           </Inside>
                        </ButtonTwo>
                    </ButtonWrapper> 
                    </Stuff>
                    <Img src='/img/rise-app-phone.png'/>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
      width:90%;
      margin:auto;
      height:394px;
      background-color:#ECFEFE;
      border-radius:50px;
`

const Content = styled.div`
    display:flex;
    justify-content: space-between;
    @media(max-width:768px){
         flex-direction:column;
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

const Wrapper = styled.div`
    width:90%;
    margin:auto;
`

const Stuff = styled.div`
flex:1;
align-self: center;
padding: 20px 0px 20px 0px ;
`

const Img = styled.img`
   flex:1;
   height:400px;
   object-fit: contain;
`

export default Down