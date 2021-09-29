import React, { useState } from "react"
import data from "../assets/data"

export const VideoContext = React.createContext(null)

export const VideoContextProvider = ({ children }) => {
  const [src, setSrc] = useState(() => data[0].video)

  const handleClick = (value) => {
    setSrc(value)
  }

  const context = {
    data,
    src,
    handleClick,
  }

  return (
    <VideoContext.Provider value={context}>
      <>{children}</>
    </VideoContext.Provider>
  )
}
