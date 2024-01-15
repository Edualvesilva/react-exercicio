import Heroes from "../components/Heroes";
import Menu from "../components/Menu";
import styled from "styled-components";
const PageContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  margin-left: 20px;
`;
function Home() {
  return (
  <PageContainer>
  <ContentContainer>
  <Heroes />
  </ContentContainer>
  </PageContainer>)
}

export default Home;
