import iconOne from "/iconOne.png"
import iconTwo from "/iconTwo.png"
import iconTHree from "/iconTHree.png"


const Utp:React.FC = () => {
    return  <>

        <div className="grid grid-cols-3 m-auto gap-3 w-[130vh] max-w-[90vw] mb-[10vh] aspect-4/1">
            <div className="bg-(--muted) rounded-xl p-4 flex flex-col justify-between h-[100%]">
                <img src={iconOne} alt="" className="h-[108px] w-[65px]" self-end />
                <h2 className="text-black text-4xl  font-medium text-3xl ">Smart & Intuitive</h2>
            </div>
            <div className="bg-(--muted) rounded-xl p-4 flex flex-col justify-between h-[100%]">
                <img src={iconTwo} alt="" className="h-[108px] w-[108px]" self-end />
                <h2 className="text-black text-4xl  font-medium text-3xl ">Premium Sound Quality</h2>
            </div>
            <div className="bg-(--muted) rounded-xl p-4 flex flex-col justify-between h-[100%]">
                <img src={iconTHree} alt="" className="h-[108px] w-[86px]" self-end />
                <h2 className="text-black text-4xl  font-medium text-3xl ">Connected & Secure</h2>
            </div>
           
        </div>
    </>
}

export default Utp