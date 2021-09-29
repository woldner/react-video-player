import Tooltip from "react-float-tooltip"
import { Button, Poster, TooltipContainer, Title } from "./styled"

const Item = ({ data, clickHandler }) => {
  const createTooltip = () => {
    return <TooltipContainer>{data.description}</TooltipContainer>
  }

  const handleClick = () => {
    clickHandler(data.video)
  }

  return (
    <Tooltip tooltipElement={createTooltip}>
      <Button onClick={handleClick}>
        <Poster src={data.image} alt={data.name} />
        <Title>{data.name}</Title>
      </Button>
    </Tooltip>
  )
}

export default Item
