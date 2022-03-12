import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import Temp from './component/weather/temp'
// import Resturant from './component/Basics/Resturant';
// import UseState from './component/Hooks/useState';
// import UseEffect from './component/Hooks/useEffect';
//  import Todo from './component/todoreact/ttt';


class App extends React.Component{
  render()
  {
  return (
    <BrowserRouter>
    <>
    <Temp/>
    </>
   </BrowserRouter>
  );
}
}
export default App; 