import React from 'react'
import './account.css'

function Account() {
  return (
    <div className='container'>
        <div className='list-items'>
            <div className='profile-img'>
                <img src='' alt='' />
                <span>My name</span>
            </div>
            <ul>
                <li>
                    لوحة التحكم
                </li>
                <li>
                    الطلبات
                </li>
                <li>
                    الدفع
                </li>
                <li>
                    تغير كلمة المرور
                </li>
            </ul>
        </div>
        <div className='item-detials'>

        </div>
    </div>
  )
}

export default Account