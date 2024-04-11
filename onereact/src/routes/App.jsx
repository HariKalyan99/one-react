import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {Outlet} from 'react-router-dom'
import PostListStoreProvider from '../store/PostStore';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../routes/App.css'




function App() {

  return (
   <PostListStoreProvider>
    <Header />
    <div className='d-flex justify-content-space-between '>
    <Sidebar />
    <Outlet />
    </div>
   </PostListStoreProvider>
  )
}

export default App;
