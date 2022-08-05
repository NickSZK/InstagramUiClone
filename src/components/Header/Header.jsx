import Logo from '../../assets/Logos/InstaLogo.svg'

import { Link } from 'react-router-dom'

export default function Header(props) {
   return (
      <>
         <header className="flex container">
            <main className='flex sbt headerContainer'>
               <div className='mr-1'>
                  <img src={Logo} alt="Instagram Logo" />
               </div>

               <div className='mr-1'>
                  <input type="text" placeholder='Pesquisar' className='border' />
               </div>

               <div className=''>
                  <Link to='/' className='ml-2'>
                     <img src={props.homeIcon} alt="Home" />
                  </Link>

                  <Link to='/direct' className='ml-2'>
                     <img src={props.messenger} alt="Mensagens no Direct" />
                  </Link>

                  <Link to='/newPosts' className='ml-2'>
                     <img src={props.newPosts} alt="Novos Posts" />
                  </Link>

                  <Link to='/findPeople' className='ml-2'>
                     <img src={props.findPeople} alt="Procurar" />
                  </Link>

                  <Link to='/like' className='ml-2'>
                     <img src={props.like} alt="Notificações" />
                  </Link>

                  <Link to='/user' className='ml-2'>
                     <img src={props.user} alt="Configurações de Usuário" className='headerImg' />
                  </Link>
               </div>
            </main>
         </header>
      </>
   )
}

/* // Example for Import Header Component
   <Header homeIcon={HomeFill} 
      messenger={Messenger} newPosts={NewPosts} 
      findPeople={FindPeople} like={Like} user={User}
   />
*/