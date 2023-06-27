import React from 'react'
import './Login.css'
import service from '../services/request'

export default function Register() {

  //注册
  const submit = async (e) => {
    // 阻止表单提交的默认行为
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const birthDay = e.target.elements.birthDay.value;
    const userName = e.target.elements.userName.value;
    const roleType = e.target.elements.roleType.value;
    const response = await service.post('/api/g9900/user/register', {
      email,
      password,
      birthDay,
      userName,
      roleType
    });
    sessionStorage.setItem('user', userName)
    sessionStorage.setItem('roleType', roleType)
    window.location.href = '/detailForm'
    console.log(response, 'res');
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

        <div className="login-form-group">
          <label htmlFor="birthDay">birthDay:</label>
          <input type="date" id="birthDay" name="birthDay" required />
        </div>

        <div className="login-form-group">
          <label htmlFor="userName">userName:</label>
          <input type="text" id="userName" name="userName" required />
        </div>

        <div className="login-form-group">
          <label htmlFor="roleType">roleType:</label>
          <select id="roleType" name="roleType" required >
            <option value="consumers">consumers</option>
            <option value="eateries">eateries</option>
          </select>
        </div>

        <div className="login-button-group">
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  )
}
