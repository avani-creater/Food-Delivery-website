
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import Cart from './components/Cart.jsx'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.jsx'
import SignIn from './components/SignIn.jsx'
import { lazy,Suspense } from 'react'
import Help from './components/Help.jsx'
          
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children: [

    {
         path:"/",
        element:<Body/>
    },

     {
         path:"/search",
         element:<Body/>
    },
                
     {
         path:"/help",
       element:(
        <Suspense fallback={<h1>help page is loding....</h1>}>
            <Help/>
        </Suspense>
       )
    },

    {
        path:"/cart",
        element:<Cart/>
    },

    {
       path:"/sign-in",
       element:<SignIn/>
    },

    {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
    }
            ] }
    
])


createRoot(document.getElementById('root')).render(
    // <App/>
   <RouterProvider router={appRouter}/>
)

