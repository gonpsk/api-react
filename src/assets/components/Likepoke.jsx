import React, { useState } from 'react'
import { FaHeart, FaRegHeart} from 'react-icons/fa'

function Likepoke() {
    const [like, setlike] =useState(false);

    const toggleLike = () => {
        // ถ้าเป็น true จะกลายเป็น false ถ้าเป็น false จะกลายเป็นทรู
        // ฟังก์ชันนี้ทำหน้าที่สลับค่าของ like ระหว่าง true และ false โดยใช้ฟังก์ชัน setLike ที่ถูกส่งเข้ามาเป็นอาร์กิวเมนต์
        setlike((check) => !check)

    }

   
  return (
    <div>
        <button onClick={toggleLike}>
            {like? <FaHeart style={{color:'red'}}/> : <FaRegHeart/>}
        </button>

      
    </div>
  )
}

export default Likepoke
