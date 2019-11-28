import styled, {css} from 'styled-components';


export const DashboardBox = styled.div`
display: flex;
justify-content: space-between
width: 85%
margin-left: auto
margin-right: auto


`;
const BoxShadow = css`
border: 1px solid rgba(0, 0,0, 0.08)
background-color:white;
box-shadow: 2px 2px 5px rgba(0, 0, 0,0.7);

`;

const row = css`
width: 90%
margin-left:auto
margin-right: auto
`;

export const Box = styled.div`
${ BoxShadow }
flex-basis: 30%
background-color: white;
margin-right: 30px
margin-left:30px
padding: 40px
margin-top: 40px
text-align: center
font-size: 18px
text-transform: capitalize
cursor: pointer;

`;



export const SaleBox = styled.div`
display: flex
justify-content: space-between
width: 90%
margin-left:auto
margin-right: auto
margin-top: 50px


`;

export const SaleDetail = styled.div`
flex-basis: 35%
background-color: white
border-radius: 6px
margin-right:30px
padding:15px
border: 1px solid rgba(0,0,0,0.07)

`;

export const H3 = styled.h3`
  text-align: center;
  font-size: 19px
  padding:20px
  color: rgba(0,0,0,0.5)
`
export const H4 = styled.h4`
  text-align: center;
  font-size: 19px
  padding:30px
  border-line: 1px solid rgba(0,0,0,0,0.9) 
`

export const Header = styled.header`
border-bottom: 1px solid rgba(0,0,0,0,0.9) 
`;

