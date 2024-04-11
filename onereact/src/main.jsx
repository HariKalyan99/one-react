import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CreatePost from './components/CreatePost.jsx';
import Dashboard from './components/Dashboard.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './routes/App.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [{
    path: "/", element: <Dashboard />
  }, {
    path: "/create-post", element: <CreatePost />
  },]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
