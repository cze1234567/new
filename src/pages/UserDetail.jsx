import React, { useState } from 'react';

export default function RestaurantProfileForm() {
  const [restaurantName, setRestaurantName] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [menu, setMenu] = useState('');
  const roleType = sessionStorage.getItem('roleType')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // 执行表单提交逻辑，例如将数据发送到服务器
    // 可以使用 restaurantName, address, cuisine 和 menu 来获取表单数据
    console.log('提交表单:', restaurantName, address, cuisine, menu);
  };

  const handleRestaurantNameChange = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  return (
    <div className="restaurant-profile-form">
      <h2>餐厅个人资料</h2>
      <form onSubmit={handleFormSubmit}>
{/* ===========================个人信息=================================== */}
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

{/* ============================================================== */}

        <div className="login-form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="login-form-group">
          <label htmlFor="birthDay">birthDay:</label>
          <input type="date" id="birthDay" name="birthDay" required disabled={roleType != 'eateries'}/>
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

        <div className="form-group">
          <label htmlFor="restaurantName">餐厅名称:</label>
          <input
            type="text"
            id="restaurantName"
            name="restaurantName"
            value={restaurantName}
            onChange={handleRestaurantNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">地址:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuisine">菜系:</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={cuisine}
            onChange={handleCuisineChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="menu">菜单:</label>
          <textarea
            id="menu"
            name="menu"
            value={menu}
            onChange={handleMenuChange}
            required
          />
          <input type="file" id="menuImage" name="menuImage" className="detailForm-fileInput" accept="image/*" />
        </div>

        <button type="submit">保存</button>
      </form>
    </div>
  );
}
