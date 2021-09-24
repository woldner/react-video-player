import { useRef, useEffect } from "react"
import { Video } from "./styled"

const Player = ({ url }) => {
  const videoRef = useRef(null)
  const urlRef = useRef(url)

  useEffect(() => {
    if (urlRef.current === url) {
      return
    }

    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }

    urlRef.current = url
  }, [url])

  return (
    <Video controls autoPlay muted loop ref={videoRef}>
      <source src={url} type="video/mp4" />
    </Video>
  )
}

export default Player
