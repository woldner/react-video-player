import { Grid } from "./styled"
import Item from "../Item"

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
