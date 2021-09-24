import { useRef, useEffect } from "react"
import { Video } from "./styled"

const Player = ({ url }) => {
  const videoRef = useRef(null)
  const urlRef = useRef(url)

  useEffect(() => {
    if (urlRef.current !== url) {
      if (videoRef.current) {
        videoRef.current.load()
        videoRef.current.play()
      }

      urlRef.current = url
    }
  }, [url])

  return (
    <Video controls ref={videoRef}>
      <source src={url} type="video/mp4" />
    </Video>
  )
}

export default Player
