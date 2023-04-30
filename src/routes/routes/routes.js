import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import Profile from "../../pages/UserHandle/Profile/Profile";
import FAQ from "../../pages/Others/FAQ/FAQ";
import Blog,{loader as blogLoader} from "../../pages/Blog/Blog";
import Courses, {loader as courseLoader } from "../../pages/coursePages/Courses/Courses";
import Course, { loader as individualCourseLoader } from "../../pages/coursePages/Course/Course";
import Register from "../../pages/UserHandle/Register/Register";
import Login from "../../pages/UserHandle/Login/Login";
import Checkout from "../../pages/Checkout/Checkout";
import ForgetPassword from "../../pages/UserHandle/ForgetPassword/ForgetPassword";
import PrivateRoute from "../Private/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element :<Main/>,
        children: 
        [
            {
                path:'/',
                element:<Home/>,
            
            },
            {
                path:'/courses',
                element:<Courses/>,
                loader: courseLoader,
            },
            {
                path:'/course/:courseID',
                element:<PrivateRoute><Course/></PrivateRoute>,
                loader: individualCourseLoader,
            },
            {
                path:'/course/checkout/:courseID',
                element:<PrivateRoute><Checkout/></PrivateRoute>,
                loader: individualCourseLoader,
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/forget-password',
                element:<ForgetPassword/>
            },
            {
                path:'/blog',
                element:<Blog/>,
                loader :blogLoader
            },
            {
                path:'/faq',
                element:<FAQ/>
            },
            {
                path:'*',
                element:<ErrorPage/>
            },
        ]
    }
])