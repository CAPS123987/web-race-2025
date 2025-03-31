//import  Product from './productSvg.svg';

const Products:React.FC = () => {
    return <div className="h-[90vh] bg-contain bg-no-repeat m-auto aspect-7/5 p-[1.2vh]">
        <div className="aspect-3/2 bg-[url(/productSvg.svg)]  bg-contain bg-no-repeat pt-[1.5vh]">
            
            <h1 className="text-(--foreground) text-4xl font-semibold ml-[3vh]">Our Products</h1>
            
            <div className="w-[100%] h-[90%] grid grid-rows-2 grid-cols-35 pt-[3vh] pb-[0] p-[2vw] gap-4">
                <div className="bg-[url(/prod1.png)] bg-contain bg-no-repeat rounded-xl col-span-14 m-0 hover:saturate-500 hover:m-1 duration-0.5 transition-all"></div>
                <div className="bg-[url(/prod2.png)] bg-contain bg-no-repeat rounded-xl col-span-9 hover:m-1 duration-0.5 transition-all"></div>
                <div className="bg-[url(/prod3.png)] bg-contain bg-no-repeat rounded-xl col-span-12 hover:m-1 duration-0.5 transition-all"></div>

                <div className="bg-[url(/prod4.png)] bg-contain bg-no-repeat rounded-xl col-span-11 hover:saturate-200 hover:m-1 duration-0.5 transition-all"></div>
                <div className="bg-[url(/prod5.png)] bg-contain bg-no-repeat rounded-xl col-span-15 hover:saturate-300 hover:m-1 duration-0.5 transition-all"></div>

                <div className="bg-[url(/prod6.png)] bg-contain bg-no-repeat rounded-xl col-span-9 hover:saturate-200 hover:m-1 duration-0.5 transition-all"></div>
            </div>
        </div>
    </div>
    
}

export default Products