import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";


const ProgressIndicator = ({ currentSection, nextSection, prevSection }) => 
{
    const [progressWidth, setProgressWidth] = useState(0);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        if (currentSection === 2 ) 
        {
        setProgressWidth("100%");

        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
        }, 800);
        return () => clearTimeout(timer);
            
        } else {
            setProgressWidth(0);
            setIsAnimationComplete(false);        
        }
    }, [currentSection]);

  return (
    <section className="mt-6 flex justify-center items-center">
          <button type="button" onClick={prevSection} 
          className={`rounded-full p-1 px-3 bg-secundary z-10 cursor-pointer`} >1</button>

          <div className="-ml-2 z-0 relative h-2 w-40 bg-tertiary ">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progressWidth }}
              transition={{ duration: .8 }}
              className="h-full bg-secundary"
              onAnimationComplete={ () => 
                {
                  if (currentSection === 2) {
                    setIsAnimationComplete(true);
                  }
                }
              }
            />
          </div>         

          <button type="button" onClick={nextSection} 
          className={`rounded-full p-1 px-3 ${isAnimationComplete  ? 'bg-secundary' : 'bg-tertiary'} cursor-pointer`}>2</button>

    </section>
  )
}

export default ProgressIndicator