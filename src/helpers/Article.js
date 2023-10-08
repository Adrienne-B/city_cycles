import React from 'react'
import Publisher from "../images/jennifer_reed.png"

function Article() {
  return (
    <div className="Article">
        <div className="headerContainer">
            <h6 className="Published">25 March 2023 * 3 min read</h6>
            <h3 className="ArticleTitle">Best Local Bike Routes</h3>
    </div>   

        <div className="Publisher">
            <div className="PublisherContainer">
                <img alt="publisher" src={Publisher} />
        </div>

            <div className="PublisherInfo">
                <h6 className="Publisher">Jennifer Reed</h6>
                <h5 className="PublisherTitle">Author and Illustrator</h5>
            </div> 
        </div>

       {/*I tried making publisher and her info into a flex-box effect but that didnt work..ask a pro if it is possible. */}

    <div className="ArticleParagraph">
        <div className="ArticleContainer">
            <p className="one">
            Some of the densely covered trails are damp, but still rideable. <br/>
            This is a fun flowy trail! It has a number of blind LH corners so <br/>
            whistle or use a bell so you can alert anyone coming the <br />  opposite way. 
         
            <br/>
            <br/>
            <br/>
          
            Built specifically for mountain bikes, a flow trail emphasizes <br/> speed
            and rhythm, featuring berms, rollers, jumps and other <br />
            features that are designed in a way that uses the rider’s <br/>
             momentum to minimize
            pedaling and braking (think downhill <br /> pump track). This trail is 
            known for its flow. Having gotten that <br />
             out of the way, the Mana Road ride is absolutely beautiful and <br />
              worth the ride.
            </p> 
         

         <div className="ArticleContainer"> 
            <p className="two">
            More info coming soon..Ridgeline is a crown jewel of Dupont State <br /> Recreational Forest. 
            Probably not best to ride. Amazing views of Castle valley are afforded after 50 meters
            of riding. Very loose and dry. Few <br />  sections rutted out but great experience for my first ride there!
                

            <br/>
            <br/>
            <br/>
            
          
            The flowiest trails of the mountain! There are actually three trails <br />  which make up the 
            loop: Horse Creek-Cattle Creek-Lower Twin Lake. <br /> Hymasa is a bit easier, so if you are
            unsure of your skill, start there, <br /> and then climb back up Hymasa to do Captain Ahab. 
            The exposed <br /> rock section near the bottom is a highlight of the trail giving the <br /> exposed 
            granite slabs of Squamish a run for their money. Fun!
            </p>  
        </div>
     </div>
   </div>
</div>

  )
}

export default Article