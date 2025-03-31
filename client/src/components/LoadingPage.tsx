import { Loader2 } from "lucide-react";

const LoadingPage = () => {
    return(
        <div className="flex items-center justify-center w-full h-screen">
            {/*<div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>*/}
            <Loader2 className="animate-spin duration-1000 size-12" />
        </div>
    )
}

export default LoadingPage;