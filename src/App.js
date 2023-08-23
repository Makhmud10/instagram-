import { MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Profile from './components/Profile'
import ForgotPassword from './components/ForgottenPassword';

function App() {
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center m-0 p-0' style={{
      minHeight: "100vh",
      minWidth: '100vw',
    }}>
      
        <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path = '/' element = {
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } />
              <Route path = '/profile' element = {
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              <Route path='/login' element = {<Login />} />
              <Route path='/signup' element = {<SignUp />} />
              <Route path ='/forgot-password' element = {<ForgotPassword />} />
            </Routes>
          
          </AuthProvider>
        </BrowserRouter>
        
      
    </MDBContainer>
  );
}

export default App;