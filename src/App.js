import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import dashboard from './assets/img/dashboard.png';


const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))
const Home = lazy(() => import("./comp/Home"))

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <img
              className='w-screen h-screen'
              src={dashboard}
              alt="dashboard"
            />
          }
        />
        <Route path="/forget-password" element={<ForgetPass />} />
      </Routes>
    </Suspense>
  )
}

export default App;