import { Poster } from "./styled"

const Item = ({ data, clickHandler }) => {
  return (
    <button onClick={() => clickHandler(data.video)}>
      <Poster src={data.image} alt={data.name} />
      <p>{data.name}</p>
    </button>
  )
}

export default Item
