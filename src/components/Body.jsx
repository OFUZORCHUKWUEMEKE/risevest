import React from 'react'
import styled from 'styled-components'
import Block from './Block'
const Body = () => {
  return (
      <>
    <Block direction='left' head='Invest Your Money In Dollars' content='By holding your investments in a stable currency,your money grows more over Time and retains its value better'image='img/file1 1.png'/>
    <Block style={{marginBottom:'90px'}} direction='right' head='Choose whats best for you' content='Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. 'image='img/file1 2.png'/>
    <Block direction='left' head='Set goals and reach them' content='You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. 'image='img/file3 1.png'/>
    <Block direction='right' head='We remember so you dont have to' content='Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.  'image='img/file 5 1.png'/>
    </>
  )
}

export default Body