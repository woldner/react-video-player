import { useState } from "react"
import Player from "../../components/Player"
import List from "../../components/List"
import data from "../../assets/data"
import { Wrapper, Container, Section } from "./styled"

const Main = () => {
  const [url, setUrl] = useState(data[0].video)

  const handleClick = (url) => {
    setUrl(url)
  }

  return (
    <Wrapper>
      <Container>
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
