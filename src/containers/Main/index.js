import Player from "../../components/Player"
import List from "../../components/List"
import { Wrapper, Container, Section, Header } from "./styled"

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <Header>React.js Video player demo</Header>
        </Section>

        <Section>
          <Player />
        </Section>

        <Section>
          <List />
        </Section>
      </Container>
    </Wrapper>
  )
}

export default Main
