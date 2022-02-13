import styled from 'styled-components'

const Assets = ()=>{
    return(
      <Container>
          <Text>Asset Classes</Text>
          <Pree>It’s your money, choose where you invest it</Pree>
          <Wrapper>
              <Content>
                  <Card>
                      <Firsto>
                         <Img style={{padding:'15px',borderRadius:'50%' ,background:'white'}} src="/img/Ellipse 205.png"/>
                      </Firsto>
                      <Secondo>
                         <Value>
                             <Text>Stocks</Text>
                             <Pre>We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.
                             </Pre>
                             <p style={{fontFamily:'sans-serif',fontSize:'16px',textAlign:'center',color:'gray'}}><span style={{color:'gray'}}>Historical returns:</span> 14% per annum</p>
                             <p style={{color:'gray',textAlign:'center'}}>Risk Level: Medium</p>
                         </Value>
                         <p style={{color:'#07969E',textAlign:'center',marginBottom:'20px',cursor:'pointer'}}>Learn How Stocks Works</p>
                      </Secondo>
                  </Card>
                  <Card>
                    <Firsti>
                      <Img style={{height:'85px',padding:'15px',borderRadius:'50%' ,background:'white'}} src="/img/real-estate-icon.png"/>
                    </Firsti>
                    <Secondi>
                       <Value>
                             <Text>Real Estates</Text>
                             <Pre>Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.
                             </Pre>
                             <p style={{fontFamily:'sans-serif',fontSize:'16px',textAlign:'center',color:'gray'}}><span style={{color:'gray'}}>Historical returns:</span> 14% per annum</p>
                             <p style={{color:'gray',textAlign:'center'}}>Risk Level: Medium</p>
                         </Value>
                         {/* style={{color:'#07969E',textAlign:'center'}} */}
                         <p style={{color:'#07969E',textAlign:'center',marginBottom:'20px',cursor:'pointer'}}>Learn How Stocks Works</p>
                    </Secondi>
                  </Card>
                  <Card>
                    <Firste>
                      <Img style={{height:'85px',padding:'15px',borderRadius:'50%' ,background:'white'}} src="/img/fixed-income-icon.png"/>
                    </Firste>
                    <Seconde>
                    <Value>
                             <Text>Fixed Income</Text>
                             <Pre>A low-risk asset perfect for anyone who wants to protect their money in a secure,  appreciating currency, i.e. the dollar. For people who want to protect their hard-earned   money from inflation while earning steady returns.
                             </Pre>

                             <p style={{fontFamily:'sans-serif',fontSize:'16px',color:'gray',textAlign:'center'}}><span style={{color:'gray'}}>Historical returns:</span> 14% per annum</p>
                             <p style={{color:'gray',textAlign:'center',}}>Risk Level: Medium</p>
                         </Value> 
                         {/* style={{color:'#07969E',textAlign:'center'}} */}
                         <p style={{color:'#07969E',textAlign:'center',marginBottom:'20px',cursor:'pointer'}}>Learn How Stocks Works</p>
                    </Seconde>
                  </Card>
              </Content>
          </Wrapper>
      </Container>
    )
}

const Container=styled.div` 
  width:90%;
  margin:auto;
  height:703px;
`

const Text = styled.h1`
    text-align:center;
    font-family: 'san-sarif';
    font-weight: 600;
    @media(max-width:768px){
      margin-top:120px
    }
`

const Pre = styled.p`
    text-align:center;
    font-weight: 400;
    font-size:16px;
`

const Pree = styled.p`
    text-align:center;
    font-weight: 400;
    color:gray;
    font-size:16px;
    @media(max-width:768px){
      margin-top:50px
    }
`

const Value = styled.div`
   @media (max-width:768px){
     padding: 40px 0px;
   }
`

const Wrapper = styled.div`
  width:90%;
  margin:auto;
`

const Firsto = styled.div`
    width:100%;
    margin: auto;
    background-color:#FFF4F0;
    height:30%;
    /* background:yellow; */
`
const Secondo = styled.div`
    width:80%;
    margin: auto;
    height:70%;
    margin-top:80px;
 
`
const Firsti = styled.div`
    width:100%;
    margin: auto;
    height:30%;
    background:#F6F2FF;

`
const Secondi = styled.div`
    width:80%;
    margin: auto;
    height:70%;
    margin-top:80px;
`
const Firste = styled.div`
    width:100%;
    margin: auto;
    height:30%;
    background:#F6F2FF;
`
const Seconde = styled.div`
    width:80%;
    margin: auto;
    height:70%;
    margin-top:80px;
    
 
`



const Content = styled.div`
  /* display :flex; */
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:20px;
  /* justify-content: space-between; */
  @media (max-width:768px){
    display:flex;
    flex-direction: column;
  }
`
const Img = styled.img`
  position: absolute;
  top:30%;
  left:50%;
  /* width:85%;
  height:85%; */
  transform: translate(-50%,-50%);
`

const Card = styled.div`
  flex:1;
  width:300;
  height: 600px;
  /* background-color:red; */
  border-radius: 16px;
  position: relative;
  /* box-shadow:inset 0 -3em 3em rgba(0,0,0,0.1),0 0 0  2px rgb(255,255,255),0.3em 0.3em 1em rgba(0,0,0,0.9);
   */
   box-shadow:rgba(149,157,165,0.2) 0px 8px 24px;
   
   @media (max-width:768px){
     margin-top: 10px;
     padding: 40px 0px;
  }
`

export default Assets