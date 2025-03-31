import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"



const Scroll:React.FC = () =>{
    const ref = useRef(null)
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const scaleX = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], ["1vw","35vw","46vw","77vw"])

    /*const scaleX = scrollYProgressuseSpring(scrollYProgress, {
        stiffness: 400,
        damping: 10,
        restDelta: 0.001
      })*/


    return <div className="h-500">
            <div className="h-screen flex justify-center items-end"><h1>Under this is scroling element</h1></div>
            <motion.div className="h-40 border w-40" ref={ref} transition={{ duration: 0.5 }} style={{marginLeft:scaleX}}>
                hhiii
            </motion.div>
        </div>
}

export default Scroll