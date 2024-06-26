import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Errormsg from './components/Errormsg';
import Contact from './components/Contact';
import RestaurantMenue from './components/RestaurantMenue';
import Usercontext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grousary from './components/Grousary';


// lazy loading
// dynamic bundling
// dynamic import
// Modularity in Code
// - Modular Bundling
// - Code Splitting

const Grousary = lazy(() => import('./components/Grousary'))


const AppLayout = () => {
  const [loginUser, setloginUser] = useState("Anand Patidar");

  



  return (
    <div className="app">
     <Provider store={appStore}>
      <Usercontext.Provider value={{ loggedinUser: loginUser ,setloginUser}}>
        <Header />
        <Outlet />
      </Usercontext.Provider>
      </Provider>

    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Errormsg />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/grousary',
        element: <Suspense fallback={<h2>loading...</h2>}><Grousary /></Suspense>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: "restaurant/:Id",
        element: <RestaurantMenue />,

      },
      {
        path: "/cart",
        element: <Cart/>,

      },
    ],
    errorElement: <Errormsg />, 
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
