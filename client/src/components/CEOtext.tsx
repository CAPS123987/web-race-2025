import founders from "/founders.png"

const CEOText = () => {
    return <>
    <div className="flex justify-between w-[130vh] max-w-[90vw] m-auto mt-[150px] mb-[200px] ">
        <div className="flex flex-col ">
            <img className="h-[100px] w-[257px]" src={founders} alt="" />
            <span>Founders</span>
        </div>
        <div>
            <h1 className="text-5xl text-right w-[900px]">
            "Smart, seamless, and intuitive. Our speakers bring AI-powered assistance and great sound to your home. Welcome to the future."
            </h1>
        </div>
    </div>
    </>;

  }
  
export default CEOText;