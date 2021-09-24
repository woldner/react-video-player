import Tooltip from "react-float-tooltip"
import { Button, Poster, TooltipContainer, Title } from "./styled"

const Item = ({ data, clickHandler }) => {
  return (
    <Tooltip tooltipElement={() => <TooltipContainer>{data.description}</TooltipContainer>}>
      <Button onClick={() => clickHandler(data.video)}>
        <Poster src={data.image} alt={data.name} />
        <Title>{data.name}</Title>
      </Button>
    </Tooltip>
  )
}

export default Item
