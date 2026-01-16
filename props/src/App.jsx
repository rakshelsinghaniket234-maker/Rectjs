import Child1 from "./component/Child1"
import Child2 from "./component/Child2"
import Child3 from "./component/Child3"
import {Parent} from "./component/Parent"
function App(){
  return(
    <>
    <h1>this is app page</h1>
    <Child1 namme ="aniket"/>
    <Child2 city ="aurangabad" country= "india"/>
    <Child3 gender ="male"/>
    <hr/>
    <Parent/>
    </>
  )
}
export default App