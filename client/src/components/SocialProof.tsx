import google from "/google.png"
import apple from "/apple.png"
import rtsoft from "/rtSoft.png"
import sitport from "/sitport.png"
import BM from "/BM.png"


const SocialProof = () => {
    return <>
    <div className="flex flex-row justify-center align-center gap-[64px] m-[64px] ">
        <div className="flex flex-row gap-[8px] items-center
">
            <img src={google} alt="" />
            <h2>Google</h2>
        </div>
        <div className="flex flex-row gap-[8px] items-center">
        <img src={apple} alt="" />
        <h2>Apple</h2>
        </div>
        <div className="flex flex-row gap-[8px] items-center
">
        <img src={BM} alt="" />
        <h2>Beneš & Michal</h2>
        </div>
        <div className="flex flex-row gap-[8px] items-center
">
        <img src={rtsoft} alt="" />
        <h2>RT-Soft</h2>
        </div>
        <div className="flex flex-row gap-[8px] items-center
">
        <img src={sitport} alt="" />
        <h2>Sit Port</h2>
        </div>
    </div>
    </>;

  }
  
  export default SocialProof;