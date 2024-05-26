import './App.css'
import { Firstpage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThirdPage } from './pages/ThirdPage';
import { ForthPage } from './pages/ForthPage';
import { LastPage } from './pages/LastPage';
const App = () => {
  // return (
  //   <Firstpage headerText='Hi press the button to switch to the next page!' buttonText='SWITCH'/>
  // );
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Firstpage/>
    },
    {
      path:"/secondPage",
      element:<SecondPage/>
    },
    {
      path:"/thirdPage",
      element:<ThirdPage/>
    },
    {
      path:"/forthPage",
      element:<ForthPage/>
    },
    {
      path:"/lastPage",
      element:<LastPage/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;