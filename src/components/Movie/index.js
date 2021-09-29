import { useContext } from "react"
import { VideoContext } from "../../context/video"
import Tooltip from "react-float-tooltip"
import { Button, Poster, TooltipContainer, Title } from "./styled"

const Movie = ({ data: { description, video, image, name } }) => {
  const { handleClick } = useContext(VideoContext)

  return (
    <Tooltip tooltipElement={() => <TooltipContainer>{description}</TooltipContainer>}>
      <Button onClick={() => handleClick(video)}>
        <Poster src={image} alt={name} />
        <Title>{name}</Title>
      </Button>
    </Tooltip>
  )
}

export default Movie
