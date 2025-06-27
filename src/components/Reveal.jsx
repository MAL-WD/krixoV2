import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const Reveal = ({children,delay=0.25 ,left,right,down,style}) => {
    const ref = useRef(null)
    const isInView=useInView(ref,{once:true})
    const mainControls=useAnimation()
    useEffect(()=>{
        if (isInView) {
                mainControls.start("visible");
        }
    },[isInView])
    return ( 
    <div ref={ref} className={style} style={{display:'grid',position:"relative",overflow:"hidden"}}>
        <motion.div
        variants={{
             hidden:left?{opacity:0,x:75}:right?{ opacity:0,x:-75}:down?{ opacity:0,y:"-100%"}:{ opacity:0,y:75},
            visible:{opacity:1,y:0,x:0}
        }}
        className={style}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1, delay:delay,ease: [0, 0.71, 0.2, 1.01]}}
        >
            {children}
        </motion.div>
    </div> );
}
 
export default Reveal;