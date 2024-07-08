import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projects from './pages/projects/Projects.tsx';
import Contact from './pages/contact/Contact.tsx';

const router = createBrowserRouter([
  { 
    path:"/", 
    element: <>
      <div className='bg-slate-950 h-16 flex flex-row justify-center justify-evenly text-2xl items-center'>
        {/* <h1 className='font-bold text-4xl'>Welcome!</h1>
        <p className='font-bold text-2xl'>My name is Joseph Gros and this is my portfolio</p> */}
        <Link to="/" className='hover:text-slate-400'>Home</Link> 
        | <Link to="projects" className='hover:text-slate-400'>My Projects</Link> 
        | <Link to="contact" className='hover:text-slate-400'>Contact Me</Link>
      </div>
      <div className='flex justify-center items-center'>
      <Outlet></Outlet>
      </div>
      </>,
    children: [
      { path: "/", element: <App></App>},
      { path: "projects", element: <Projects></Projects>},
      { path: "contact", element: <Contact></Contact>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
