import { useState } from "react"
import { Wrapper, Container, Section, Header } from "./styled"
import Player from "../../components/Player"
import List from "../../components/List"
import data from "../../assets/data"

const Main = () => {
  const [url, setUrl] = useState(data[0].video)

  const handleClick = (value) => {
    setUrl(value)
  }

  return (
    <Wrapper>
      <Container>
        <Section>
          <Header>React.js Video player demo</Header>
        </Section>

        <Section>
          <Player url={url} />
        </Section>

        <Section>
          <List items={data} clickHandler={handleClick} />
        </Section>
      </Container>
    </Wrapper>
  )
}

export default Main
