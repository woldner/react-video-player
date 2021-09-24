import { Button, Poster } from "./styled"

const Item = ({ data, clickHandler }) => {
  return (
    <Button onClick={() => clickHandler(data.video)}>
      <Poster src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
    </Button>
  )
}

export default Item
