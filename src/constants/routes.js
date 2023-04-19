import AdminPanel from "../components/AdminPanel/AdminPanel";
import MentorForm from "../components/MainMentorForm/MentorForm";
import Mainmentors from "../components/MainMentors/Mainmentors";
import Profile from "../components/MainProfile/Profile";
import MainShop from "../components/MainShop/MainShop";
import MainTrainings from "../components/MainTranings/MainTrainings";
import MainVideo from "../components/MainVideo/MainVideo";
import { ResetView } from "../components/ResetEmail";
import { ResetPassConfirm } from "../components/ResetPassConfirm/ResetPassConfirm";
import Submited from "../components/Submited/Submited";
import MentorFormSubmit from "../components/mentorFormSubmit/MentorFormSubmit";
import Auth from "../pages/Auth";
import { Login } from "../pages/Login";
import Main from "../pages/Main";
import { Register } from "../pages/Register";
import { Reset } from "../pages/Reset";
import { ResetShowMEs } from "../pages/ResetShowMes";

export const LOGGED_ROUTES = [
    {path: '/', element: <Main/>},
    {path: '/profile', element: <Profile/>},
  {path: '/shop', element: <MainShop/>},
  {path: '/mentors', element: <Mainmentors/>},
  {path: '/admin-panel', element: <AdminPanel/>},
  {path: '/mentor-form', element: <MentorForm/>},
  {path: '/mentor-form-submit', element: <MentorFormSubmit/>},
  {path: '/mentor-form-submited', element: <Submited/>},
  {path: '/tranings', element: <MainTrainings/>},






  
  

  ];
  
export const UNLOGGED_ROUTES = [
  {path: '/', element: <Main/>},
  {path: '/video', element: <MainVideo/>},
  {path: '/shop', element: <MainShop/>},

    {path: '/login', element: <Login/>},
    {path: '/mentors', element: <Mainmentors/>},
    {path: '/tranings', element: <MainTrainings/>},
    {path: '/mentor-form', element: <MentorForm/>},
    {path: '/mentor-form-submit', element: <MentorFormSubmit/>},
    {path: '/mentor-form-submited', element: <Submited/>},

    

    {path: '/register', element: <Register/>},
    {path: '/reset-password', element: <Reset/>},
    {path: '/reset-password/show', element: <ResetShowMEs/>},

    
  ]