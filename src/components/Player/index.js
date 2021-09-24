import { useRef, useEffect } from "react"
import { Video } from "./styled"

const Player = ({ url }) => {
  const video = useRef()
  const previousUrl = useRef(url)

  useEffect(() => {
    if (previousUrl.current !== url) {
      if (video.current) {
        video.current.load()
      }

      previousUrl.current = url
    }
  }, [url])

  return (
    <Video controls ref={video}>
      <source src={url} type="video/mp4" />
    </Video>
  )
}

export default Player
