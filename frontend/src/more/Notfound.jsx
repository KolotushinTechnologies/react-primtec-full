import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      <div
       style={{
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }}
      >
      <h1>404 Ошибка. Страница не найдена!</h1>
      <Link to="/"
      style={{
        color:"#7b02ea",
        fontSize:"1.5vmax",
        fontFamily:"sans-serif",
        padding:"1vmax 0"
      }}
      >Вернуться на главную</Link>
      </div>
    </div>
  )
}

export default Notfound;