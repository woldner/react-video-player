import { useContext, useEffect, useRef } from "react"
import { VideoContext } from "../../context/video"
import { Video } from "./styled"

const Player = () => {
  const { src } = useContext(VideoContext)

  const videoRef = useRef(null)
  const srcRef = useRef(src)

  useEffect(() => {
    if (srcRef.current === src) {
      return
    }

    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }

    srcRef.current = src
  }, [src])

  return (
    <Video controls autoPlay muted loop ref={videoRef}>
      <source src={src} type="video/mp4" />
    </Video>
  )
}

export default Player
