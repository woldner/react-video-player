import Main from "./containers/Main"
import { VideoContextProvider } from "./context/video"

const App = () => {
  return (
    <VideoContextProvider>
      <Main />
    </VideoContextProvider>
  )
}

export default App
