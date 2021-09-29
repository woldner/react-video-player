import { useContext } from "react"
import { VideoContext } from "../../context/video"
import { Grid } from "./styled"
import Movie from "../Movie"

const List = () => {
  const { data } = useContext(VideoContext)

  return (
    <Grid>
      {data.map((item, index) => (
        <Movie key={index} data={item} />
      ))}
    </Grid>
  )
}

export default List
