import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full
    h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl flex 
      flex-row mx-auto items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>

            </div>
            <div className='z-30'>
              <h1 className={`${styles.heroHeadText} text-black`}>
                euroia biou </h1>
                <p className={`{styles.heroSubText} mt-2
                 text-black-100`}>
                  Means : "living in agreement with nature" <br 
                  className='sm:block hidden'/> 
                  to live in agreement with nature we must accept 
                  reality for what it is. 
                 </p>
                 
            </div>
            
        </div>
        <ComputersCanvas />
        
        
    </section>
  )
}

export default Hero