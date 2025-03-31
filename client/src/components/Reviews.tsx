import { Star } from "lucide-react";
import Clovek1 from "/clovek1.png"
import Clovek2 from "/clovek2.png"
import Clovek3 from "/clovek3.png"


const Reviews = () => {
    return <>
    <div className="h-[57vh] bg-contain bg-no-repeat m-auto aspect-11/5 p-[1.2vh] mt-[20vh] mb-[10vh]">
        <div className="aspect-14/5 bg-[url(/review.svg)]  bg-contain bg-no-repeat">
            <h1 className="text-(--foreground) text-3xl font-semibold ml-[1vh]">Customer Reviews</h1> 

            <div className="flex flex-row m-[1vh] justify-center mt-[5vh] w-[100%]">
                <div className="bg-(--muted) p-[32px] flex flex-col gap-[16px]">
                    <img className="h-[100px] w-[100px]" src={Clovek1}></img>
                    <div >
                    <div>
                        <span  className="text-xl font-medium">Olivia</span>
                        <span  className="text-xl font-medium flex"><Star/><Star/><Star/><Star/><Star/></span>
                    </div>
                    <p className="w-[400px]">"Perfect for basic tasks. Compact and affordable, exactly what I needed for my small apartment."</p>
                    </div>
                    
                </div>

                <div className="bg-(--muted) p-[32px] flex flex-col gap-[16px]">
                    <img className="h-[100px] w-[100px]" src={Clovek2}></img>
                    <div >
                    <div>
                        <span  className="text-xl font-medium">Olivia</span>
                        <span  className="text-xl font-medium flex"><Star/><Star/><Star/><Star/><Star/></span>
                    </div>
                    <p className="w-[400px]">"Perfect for basic tasks. Compact and affordable, exactly what I needed for my small apartment."</p>
                    </div>
                    
                </div>

                <div className="bg-(--muted) p-[32px] flex flex-col gap-[16px]">
                <img className="h-[100px] w-[100px]" src={Clovek3}></img>
                <div>
                <div>
                    <span  className="text-xl font-medium mb-[16px]">Emma</span>
                    <span  className="text-xl font-medium mb-[16px] flex"><Star/><Star/><Star/><Star/><Star/></span>
                </div>
                <p className="w-[400px]">"Simple but effective. The sound is decent, and it does what I need without any fancy features."</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>;
  }
  
export default Reviews;