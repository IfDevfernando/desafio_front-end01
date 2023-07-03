import {  useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import boximage from '../imagens/box.png'
import './PageStyle.css'



const Page = () => {


    
    const[value,setValue]=useState(0)
//adicionando 
    const handleIncrement=()=>{
        setValue((prevnumber)=>prevnumber +1)
        
    }
//subtraindo
const handleDecrement=()=>{
    if(value > 0){
        setValue(value -1)
    }
}
//mensagem de sucesso
//adicione a const erro para controlar o formulario na limpeza
const[mensagemenviada,setMensagemenviada]=useState(false)
const[mensagem,setMensagem]=useState('')
const[erromensagem,setErromensagem]=useState('')

const handleEnviar=(event)=>{
    event.preventDefault();
    
    //time da mensagem de sucesso e erro
    if(mensagem.trim() === "" ){
        setErromensagem(true)
        setMensagemenviada("Erro")
        
    }else{
        setMensagemenviada(true)
        setErromensagem(false)
        setMensagem('')
        
        
    }
}
const handleMensage=(event)=>{
    setMensagem(event.target.value)
    
}
//garantia para que a mensagem sera exibida no tempo correto
useEffect(()=>{
    if(mensagemenviada){
        setTimeout(()=>{
            setMensagemenviada(false)
        },4000)
    }
},)


//evento de  animação
const[mostrafade,setMostrarfade]=useState(false)

const handleMostrar=()=>{
    setMostrarfade(true);
}


  return (
    <div className="container">
        <header className="cabe">
            <h1>Formulario <p>para compra de</p> <strong>Pacote de Stickers</strong></h1>
            <img src={boximage} alt="imagem cabeça" width={150} height={150}/>
        </header>
        <section className='container'>
            <h3>Quais os stickers?</h3>
            <form action="" onSubmit={handleEnviar} className='envio'>
            <p>
                <input type="checkbox" name="l" id="m" />
                React
            </p>
            <p>
                <input type="checkbox" name="l" id="m" />
                Vue
            </p>
           
            <p className='custom-check'>
                <label htmlFor="m" >
                <input type="checkbox" name="l" id="m" className='check-input' />
                </label>
                Angular
            </p>
           
            <h3>Quantos stickers de cada?</h3>
            <p className='form'> 
                <button className='mais ' onClick={handleDecrement}> <strong>-</strong> </button>
                <input type="number" name="" id="form_numero" value={value} />
                <button type="button" className='menos' onClick={handleIncrement}>

                 <strong>+</strong>
                 </button>            
              </p>
            <h3>Observações:</h3>
            
                
                <p> <textarea name="" id="" cols="30" rows="10" placeholder=' Ex:papel especial,customização especial.....' value={mensagem} onChange={handleMensage} ></textarea></p>
                

                <div className='container-enviar'>
                    <button type='submit' className='enviar' onClick={handleMostrar}>ENVIAR</button>
                    
                    {mensagemenviada==="Erro"&&(
                        
                    <motion.p
                    initial={{text:0}}
                    animate={{width:"50%"}}
                    transition={{duration:0.8}}
                    exit={{opacity:1}}
                     className='erro'>Erro,verifique os campos</motion.p>
                    )}
                    
                    {mensagemenviada===true &&(
                <motion.p 
                    initial={{text:0}}
                    animate={{width:"50%"}}
                    transition={{duration:0.7}}
                    className='sucesso'>Enviado com sucesso</motion.p>
                    )}
                </div>
                
            
            </form>
           
           
        </section>
     
       
        
    </div>
  )
}

export default Page