export default function UserConversation(props) {
   let image = ``
   console.log(props.img)
   return(
      <>
         <section className="">
            <div className="UserConversation f px-2 py-1">
               {console.log('Test' + props.img)}
               <img src={props.img} alt={props.alt}/>
               <div className='ml-2'>
                  <span>{props.name}</span>
                  <p>{props.msg}</p>
               </div>
            </div>
         </section>
      </>
   )
}