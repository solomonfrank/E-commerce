import styled, { css } from 'styled-components';


const HeaderTagStyle = css`
text-align: center;
font-weight:700;
font-size: 30px;
margin-top:4px
text-align: center;
@media only screen and (max-width:990px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    
}
@media only screen and (max-width:600px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
}
`;

export const BodyTemplate = styled.div`
display: grid

grid-template-columns:[sidebar-start ] 15% [sidebar-end full-start ] 85% [full-end]
@media only screen and (max-width:990px) {
    grid-template-columns:[full-start ] 100% [full-end]
    grid-template-rows: [sidebar-start ] 5rem [sidebar-end full-start] min-content[full-end]
}
`;

export const SidebarWrapper = styled.div`

background-color: goldenrod


@media only screen and (max-width:990px) {
    postion: relative
    background-color: goldenrod
    grid-row: 1/2;
  
   
}

`;

export const MainContent = styled.div`
grid-column: full-start / -1
@media only screen and (max-width:990px) {
    grid-row: full-start / full-end
    
   
}


`;

export const ProductContainer =styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 1rem;
perspective: 150rem;
transition: all .8s;
}
`;
 export const H2 = styled.h2`
 ${HeaderTagStyle}
`


