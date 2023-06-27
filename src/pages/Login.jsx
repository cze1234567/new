import React from 'react'
import './Login.css'
import service from '../services/request'

export default function Login() {

  //登陆
  const submit = async (e) => {
    // 阻止表单提交的默认行为
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const response = await service.post('/api/g9900/user/login', {
      email,
      password
    });
    console.log(response, 'res');
    // sessionStorage.setItem('user', userName)
    // sessionStorage.setItem('roleType', roleType)
  }
  return (
    <div className="login-container">
      <form onSubmit={submit}>
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="login-form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="login-button-group">
          <button type="submit">登录</button>
          <button type="button" onClick={
            ()=> window.location.href='/register'
          }>注册</button>
        </div>
      </form>
    </div>
  )
}
