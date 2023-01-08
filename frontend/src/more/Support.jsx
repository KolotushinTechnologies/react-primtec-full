import React, { useRef, useState } from 'react'
import MetaData from './Metadata';
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from './BottomTab.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = ({history}) => {

    const [done, setDone] = useState(false);

    const formRef = useRef(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_hc4y6hp', 'template_q6oankt', formRef.current, 'user_XiIxNsDzs1ebEgXJcyD1U')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
       <>
       <MetaData title="Поддержка | Primtec"/>
       <div 
       className='support'
       style={{
           width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0'
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center",
               fontFamily: "Montserrat",
           }}>Вы можете обратиться к нам по любыым интересущим Вас вопросам!</h2>
           <div>
               <form className="form__support" style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }} ref={formRef}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Ваше Имя' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #7b02ea",
                       margin:"10px 0",
                       height:"40px"
                   }} 
                   name='user__name'
                   />
                    <input type="text" placeholder='Тема обращения' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #7b02ea",
                       margin:"10px 0",
                       height:"40px"
                   }}
                   name='user__subject'
                   />
                   <input type="email" placeholder='Ваш Email' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #7b02ea",
                       margin:"10px 0",
                       height:"40px"
                   }}/>
                   <textarea cols="30" rows="5" required placeholder='Что Вы хотите спросить?'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #7b02ea",
                    margin:"10px 0",
                    fontFamily: "Montserrat",
                }}
                name='user__message'
                   ></textarea>
                   <button 
                   style={{
                       border:"none",
                       borderRadius: "100px",
                       cursor:"pointer",
                       width:"100%",
                       background:"#7b02ea",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontFamily: "Montserrat",
                   }}
                   >Отправить</button>
                   {done && toast.success("Спасибо за обращение! Мы как можно скорее ответим Вам!")}
               </form>
               <div className='animation'>

               </div>
           </div>
       </div>
       <ToastContainer 
       position="bottom-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
       <BottomTab />
       </>
    )
}

export default Support
