import { useContext } from "react"
import { VideoContext } from "../../context/video"
import { Grid } from "./styled"
import Movie from "../Movie"

const List = () => {
  const { items } = useContext(VideoContext)

  return (
    <Grid>
      {items.map((data, index) => (
        <Movie key={index} item={data} />
      ))}
    </Grid>
  )
}

export default List
