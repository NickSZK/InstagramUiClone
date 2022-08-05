import Logo from '../../assets/Logos/InstaLogo.svg'
import FbLogo from '../../assets/Logos/FbLogo.png'
import AppStore from '../../assets/Logos/AppStore.svg'
import GooglePlay from '../../assets/Logos/GooglePlay.svg'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'

export default function Login() {

   const verify = () => {
      let email = document.querySelector('#email').value
      let password = document.querySelector('#password').value

      if (email !== '' && password.length >= 6) {
         let btnSubmit = document.querySelector('#btnSubmit')
         btnSubmit.removeAttribute('disabled')

         btnSubmit.classList.remove('fSubmitDisable')
         btnSubmit.classList.add('fSubmitActive')
      }
   }

   return (
      <>
         <div className="container column flex">
            <section className="containerLogin border flex column">

               <div className="logoInsta flex my-4">
                  <img src={Logo} alt="Insta Logo" className='logoLogin' />
               </div>

               <form action="/" method='GET' className='formLogin mb-2' onChange={() => verify()}>
                  <div className='fName border mb-1'>
                     <input type="email" id='email' placeholder='Telefone, nome de usuário ou email' />
                  </div>

                  <div className='fPassword border mb-2'>
                     <input type="password" id='password' placeholder='Senha' />
                  </div>

                  <div className='fSubmitDiv'>
                        <input type="submit" disabled id='btnSubmit' value="Entrar"
                           className='fSubmit fSubmitDisable' onChange={() => verify()} />
                  </div>

               </form>

               <div className='hrows flex sbt'>
                  <div className="hrow flex"></div>
                  OU
                  <div className="hrow flex"></div>
               </div>

               <section className="fb flex column my-3">
                  <button className='flex mb-3'>
                     <img src={FbLogo} alt="Facebook Logo" />
                     Entrar com o Facebook
                  </button>

                  <a href="/">Esqueceu a senha</a>
               </section>

            </section>

            <section className="containerRegister border flex mt-2 py-3">
               <p>Não tem uma conta? <a href='/'>Cadastre-se</a></p>
            </section>

            <section className='containerDownload flex column mt-3'>
               <p>Obtenha o aplicativo.</p>

               <div className="download flex mt-3">
                  <Link to="/" className='mr-1'>
                     <img src={AppStore} alt="AppStore" />
                  </Link>

                  <Link to="/">
                     <img src={GooglePlay} alt="AppStore" />
                  </Link>
               </div>
            </section>

            <Footer />
         </div>
      </>
   )
}