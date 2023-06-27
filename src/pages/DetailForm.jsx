import React from 'react';
import service from '../services/request'

export default function RestaurantForm() {
  const handleSubmit =async (e) => {
    e.preventDefault();
    // 表单提交逻辑
    // const response = await service.post('/api/g9900/user/register');
  };

  return (
    <div className="detailForm-container">
      <form className="detailForm-form" onSubmit={handleSubmit}>
        <div className="detailForm-group">
          <label htmlFor="restaurantName" className="detailForm-label">餐厅名称:</label>
          <input type="text" id="restaurantName" name="restaurantName" className="detailForm-input" required />
        </div>

        <div className="detailForm-group">
          <label htmlFor="address" className="detailForm-label">地址:</label>
          <input type="text" id="address" name="address" className="detailForm-input" required />
        </div>

        <div className="detailForm-group">
          <label htmlFor="cuisine" className="detailForm-label">菜系:</label>
          <input type="text" id="cuisine" name="cuisine" className="detailForm-input" required />
        </div>

        <div className="detailForm-group">
          <label htmlFor="menu" className="detailForm-label">菜单:</label>
          <textarea id="menu" name="menu" className="detailForm-input detailForm-textarea" required />
          <input type="file" id="menuImage" name="menuImage" className="detailForm-fileInput" accept="image/*" />
        </div>

        <button type="submit" className="detailForm-button">提交</button>
      </form>
    </div>
  );
}
