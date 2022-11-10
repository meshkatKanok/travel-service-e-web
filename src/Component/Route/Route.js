import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../page/Blog/Blog";
import Deatils from "../page/Deatils/Deatils";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Myreview from "../page/MYreview/Myreview";
import AddServices from "../page/Services/AddServices";
import Services from '../page/Services/Services'
import Signup from "../page/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
 

const router=createBrowserRouter([
    {path:'/',element:<Main/>,children:[
{path:'/',element:<Home/>,
loader:()=>fetch(`https://assignment-server-three.vercel.app/threeservices`)
},
{path:'/home',element:<Home/>,
loader:()=>fetch(`https://assignment-server-three.vercel.app/threeservices`)

},
{path:'/service',element:<Services></Services>,
loader:()=>fetch(`https://assignment-server-three.vercel.app/services`)
},
{path:'/services/:id',element:<Deatils></Deatils>,
loader:({params})=>fetch(`https://assignment-server-three.vercel.app/services/${params.id}`)
},
{path:'/myreview',element:<PrivateRoute><Myreview></Myreview></PrivateRoute>,
loader:()=>fetch(`https://assignment-server-three.vercel.app/review`)
}
,
{path:'/addservices',element:<PrivateRoute><AddServices/></PrivateRoute>},
{path:'/login',element:<Login></Login>},
{path:'/signup',element:<Signup></Signup>},
{path:'/blog',element:<Blog></Blog>},
 
    ]}
])
export default router;