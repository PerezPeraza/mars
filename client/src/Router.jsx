import App from './App'
import { createHashRouter, createBrowserRouter } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import Home from './components/Home'
const Router = createHashRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path:"/home/",
            element: <Home />
        },
        {
            path:"/login/",
            element: <LogIn />
        },
        {
            path:"/signup/",
            element: <SignUp />
        }
    ]
}])

export default Router;