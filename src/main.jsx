import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layouts/Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AuthProvider from './provider/AuthProvider/AuthProvider'
import Registration from './pages/Registration/Registration';
import Dashboard from './Layouts/Dashboard';
import AddTask from './pages/Dashboard/AddTask/AddTask';
import ToDoTask from './pages/Dashboard/ToDoTask/ToDoTask';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Registration/>
      },

    ],
  },
  {
    path:"dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"addTask",
        element:<AddTask/>
      },
      {
        path:"ToDoTask",
        element:<ToDoTask/>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
     </DndProvider>
     </AuthProvider>
  </React.StrictMode>,
)
