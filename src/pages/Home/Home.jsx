import Header from "../../components/Header/Header";

import HomeFill from '../../assets/Icons/Home-fill.svg'
import Messenger from '../../assets/Icons/Messenger.svg'
import NewPosts from '../../assets/Icons/NewPosts.svg'
import FindPeople from '../../assets/Icons/FindPeople.svg'
import Like from '../../assets/Icons/Like.svg'
import User from '../../assets/Images/Luffy.png'

export default function Home() {
   return(
      <>
         <Header homeIcon={HomeFill} 
            messenger={Messenger} newPosts={NewPosts} 
            findPeople={FindPeople} like={Like} user={User}
         />
         
         <div className="containerHome border2">
            <main className="mainHome f sbt mt-3 border4">
               <section className="activitiesFriendsHome border3">
                  <div className="statusFriendsHome py-1 px-2 mb-2">
                     <div className="userNews">
                        <img src={Like} alt="" />
                     </div> 
                  </div>

                  <div className="activityFriendHome py-1 px-2">
                     <h1>Activity</h1>
                  </div>
               </section>

               <div className="userSuggestions border">
                  <h1>Suggestions</h1>
               </div>
            </main>
         </div>
      </>
   )
}