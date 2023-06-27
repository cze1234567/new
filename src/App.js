import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailForm from './pages/DetailForm';
import UserDeatil from './pages/UserDetail';
import NavBar from './components/NavBar';
import Voucher from './pages/Voucher';
import List from './pages/List';

function App() {

  //模拟生命周期
  useEffect(() => {
    //获取用户信息
    const userInfo = sessionStorage.getItem('user')
    //如果用户信息不存在跳转到登陆页,并且不在登陆页和注册页
    // if (!userInfo && (!window.location.href.includes('login') && !window.location.href.includes('register'))) {
    //   window.location.href = '/login'
    // }
  }, [])

  return (
    <Router>
      {
        (!window.location.href.includes('login') && !window.location.href.includes('register')) && <NavBar />
      }
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailForm" element={<DetailForm />} />
        <Route path="/userDeatil" element={<UserDeatil />} />
        <Route path="/list" element={<List />} />
        <Route path="/voucher" element={<Voucher />} />
      </Routes>
    </Router>
  );
}

export default App;


