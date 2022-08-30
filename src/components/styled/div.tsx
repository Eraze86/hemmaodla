import styled, { keyframes }  from "styled-components";
//animation 
const fadeIn = keyframes`
    from { right: -20rem;
      }
    to { right: -1rem;
      }
`
export const NameDiv = styled.div`
position: absolute;;
padding: 2rem;
font-size: 5rem;
font-family: 'Dancing Script', cursive;
color: white;
`

export const Div = styled.div`
position: absolute;;
right: 20%;;
background-color: white;
width: 15rem;
height: 5rem;
border: 0.2rem solid #4f351a;
border-radius: 1rem;
padding: 1rem;
text-align: center;
`

export const WeatherDiv = styled.div`
position: absolute;;
right: -1rem;
top: 10rem;
background-color: #A49580;
width: 10rem;
height: 3rem;
border-radius: 1rem; 
padding: 1rem;
animation: ${fadeIn} 1s ease-in;
`
//animationen används här. 

