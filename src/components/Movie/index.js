import { useContext } from "react"
import { VideoContext } from "../../context/video"
import Tooltip from "react-float-tooltip"
import { Button, Poster, TooltipContainer, Title } from "./styled"

const Movie = ({ data: { description, video, image, name } }) => {
  const { clickHandler } = useContext(VideoContext)

  const createTooltip = () => {
    return <TooltipContainer>{description}</TooltipContainer>
  }

  const handleClick = () => {
    clickHandler(video)
  }

  return (
    <Tooltip tooltipElement={createTooltip}>
      <Button onClick={handleClick}>
        <Poster src={image} alt={name} />
        <Title>{name}</Title>
      </Button>
    </Tooltip>
  )
}

export default Movie
