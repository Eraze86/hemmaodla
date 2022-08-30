import styled , { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { right: -20rem;
      }
    to { right: -1rem;
      }
`

export const Nav = styled.nav`
position: absolute;
top: 3rem;
right: -1rem;
width: 15rem;
border-radius: 1rem; 
padding: 0.8rem;
background-color: #A49580;
animation: ${fadeIn} 1s ease-in;
`