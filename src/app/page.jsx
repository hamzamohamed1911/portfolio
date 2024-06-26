"use client"
import Image from 'next/image';
import { hero } from "../../public";
import Button from './_components/Button';
import{ motion } from "framer-motion"
import TypingText from './_components/TypingText';
import { useRouter } from 'next/navigation'
import { useDark } from './_store/ThemeProvider';
const Homepage = () => { 
  const router = useRouter()
  const { dark } = useDark(); 

  const texts = ["Software Engineer", "React.js Developer","Next.js Developer"];

  return(
    <motion.div 
    key="Home"
    className='h-full '
     initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}>
    
    <div className=" h-full flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl-px-48 ">

      <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
        <Image alt="hero"  src={hero} fill className='object-contain '/>
      </div> 
 
       <div className=" flex flex-col lg:h-full lg:w-1/2 gap-6 items-center justify-center">
        
      <div className=' sm:pt-2'>
      <TypingText   texts={texts} /> 

      </div>
        
        <p className={`font-roboto font-light text-md sm:text-2xl px-4 ${dark ? "text-white" :"text-blue-900"}`}>
        Hello! My Name Is Hamza muhammed , a dedicated React.js and Next.js developer with a strong foundation in computer science. Graduating from the Faculty of Computer Science has equipped me with a solid understanding of fundamental programming concepts, which I apply in my work to create innovative web applications. 
        </p>
        <div className='flex gap-4 lg:w-full'>
          <Button handleClick={() => router.push('/portfolio')} label=" View my work" />
           
          <Button handleClick={() => router.push('/contact')} backgroundColor label="Contact me" /> 
            
          
        </div>
     </div>
    </div>
    </motion.div>
  ) 

};

export default Homepage;
