import miage from './assets/react.svg'
import image from './assets/download.jpeg'
import Image from "./Component/Image"
function App(){
  return(
    <>
    <h1>I am aniket kumar</h1>
    <img src="vite.svg" height="200px" alt=""/>
    <h2>image from src</h2>
    <Image/>
    <img src={miage} height="200px" alt=""/>
    <img src={image} height="200px" alt=""/>
    </>
  )
}
export default App
