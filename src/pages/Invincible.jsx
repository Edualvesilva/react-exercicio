import Menu from "../components/Menu";
import styled from "styled-components";
const PageContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  margin-left: 20px;
`;

function Invincible() {
  return (<PageContainer><Menu/><ContentContainer><h2>Invincible</h2></ContentContainer></PageContainer>
  )
}

export default Invincible;
