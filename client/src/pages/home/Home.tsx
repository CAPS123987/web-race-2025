import Products from "@/components/Products"
import Utp from "@/components/utp"
import Header from "@/components/header"
import SocialProof from "@/components/SocialProof"
import CEOText from "@/components/CEOtext"
import Reviews from "@/components/Reviews"
import Footer from "@/components/footer"

const Home:React.FC = () =>{


    return <>
        <Header></Header>
        <SocialProof></SocialProof>
        <CEOText></CEOText>
        <Utp></Utp>
        <Products></Products>
        <Reviews></Reviews>
        <Footer></Footer>
            </>
}

export default Home