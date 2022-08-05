import Header from "../../components/Header/Header";
import Footer2 from "../../components/Footer2/Footer2";
import { Link } from "react-router-dom";

export default function Error() {
   return(
      <>
         <section className="errorContainer">
            <div className="flex column sbt">
               <div className="flex column px-5">
                  <h4 className="my-4">Esta página não está disponível.</h4>

                  <p>O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <Link to='/'> Voltar para o Instagram.</Link></p>
               </div>

               <div>
                  <Footer2 />
               </div>
            </div>
         </section>
      </>
   )
}