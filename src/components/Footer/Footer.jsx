import { Link } from 'react-router-dom'
import ArrowDown from '../../assets/Icons/ArrowDown.svg' 

export default function Footer() {
   return (
      <>
         <footer className='footer flex column sbt wrap mt-4'>
            <div className='flex wrap links'>
               <div><Link to='/'>Meta</Link></div>
               <div><Link to='/'>Sobre</Link></div>
               <div><Link to='/'>Bolg</Link></div>
               <div><Link to='/'>Carreiras</Link></div>
               <div><Link to='/'>Ajuda</Link></div>
               <div><Link to='/'>API</Link></div>
               <div><Link to='/'>Privacidade</Link></div>
               <div><Link to='/'>Termos</Link></div>
               <div><Link to='/'>Principais contas</Link></div>
               <div><Link to='/'>Hashtags</Link></div>
               <div><Link to='/'>Localizações</Link></div>
               <div><Link to='/'>Intagram Lite</Link></div>
               <div><Link to='/'>Carregamento de contatos e não usuários</Link></div>
               <div><Link to='/'>Dança</Link></div>
               <div><Link to='/'>Comida e bebida</Link></div>
               <div><Link to='/'>Cada e jardim</Link></div>
               <div><Link to='/'>Música</Link></div>
               <div><Link to='/'>Artes visuais</Link></div> 
            </div>

            <div className='links flex mt-2'>
               <Link to='/' className='flex '>Português (Brasil) 
                  <span><img src={ ArrowDown } alt="Seta Opções" className='flex ml-1'/></span>
               </Link>
               <Link to='/'>© 2022 Instagram from Meta</Link>
            </div>
         </footer>
      </>
   )
}