import React from 'react'

export default function NavBar() {
  return (
    <div className='navBox'>
      <div className="navigation">
        <a href="/userDeatil">个人信息</a>
        <a href="/list">餐馆列表</a>
        <a href="/voucher">卷</a>
      </div>
    </div>
  )
}
