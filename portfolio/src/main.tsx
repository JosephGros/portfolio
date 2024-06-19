import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutMe from './pages/about/About.tsx';
import Projects from './pages/projects/Projects.tsx';
import Contact from './pages/contact/Contact.tsx';

const router = createBrowserRouter([
  { 
    path:"/", 
    element: <>
      <div>
        <h1 className='font-bold text-4xl'>Welcome!</h1>
        <p className='font-bold text-2xl'>My name is Joseph Gros and this is my portfolio</p>
        <Link to="/">Home</Link> | <Link to="about">About Me</Link> | <Link to="projects">My Projects</Link> | <Link to="contact">Contact Me</Link>
      </div>
      <Outlet></Outlet>
      </>,
    children: [
      { path: "/", element: <App></App>},
      { path: "about", element: <AboutMe></AboutMe>},
      { path: "projects", element: <Projects></Projects>},
      { path: "contact", element: <Contact></Contact>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
