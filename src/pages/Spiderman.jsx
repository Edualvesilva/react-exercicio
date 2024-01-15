import Webhead from "./../components/Webhead"
import Menu from "../components/Menu";
import styled from "styled-components";
const SpidermanContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  margin-left: 20px;
`;
function Spiderman() {
  return (<SpidermanContainer>
    <Menu/>
    <ContentContainer>
  <h1>Spider-Man</h1>
   <Webhead />
   </ContentContainer>
  </SpidermanContainer>
  )
}

export default Spiderman;
