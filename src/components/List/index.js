import Item from "../Item"
import { Grid } from "./styled"

const List = ({ items, clickHandler }) => {
  return (
    <Grid>
      {items.map((item, index) => (
        <Item key={index} data={item} clickHandler={clickHandler} />
      ))}
    </Grid>
  )
}

export default List
