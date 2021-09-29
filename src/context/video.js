import React, { useState } from "react"
import items from "../assets/data"

export const VideoContext = React.createContext(null)

export const VideoContextProvider = ({ children }) => {
  const [src, setSrc] = useState(() => items[0].video)

  const clickHandler = (value) => {
    setSrc(value)
  }

  const context = {
    items,
    src,
    clickHandler,
  }

  return (
    <VideoContext.Provider value={context}>
      <>{children}</>
    </VideoContext.Provider>
  )
}
