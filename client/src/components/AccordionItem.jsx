import React from 'react'

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <section className='mt-8 border rounded-md text-sm'>
        <div className={`flex items-center gap-4 
            ${isOpen? 'rounded-t-md' : 'rounded-md'}  cursor-pointer border-b `} 
            onClick={onToggle}
        >
          <figure className="h-10 px-4 border-r flex justify-center items-center">
            <div className={`transition-transform duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
              <svg className="h-5 w-5 fill-current stroke-text-color stroke-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d={isOpen? "M6 12h12" : "M6 12h12m-6-6v12"}
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
              </svg>
            </div>
          </figure>
          <h3 className='font-bold text-lg text-text-color '>{title}</h3>
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 p-0"
          } `}
        >
            {children}
        </div>          
    </section>          

  )
}

export default AccordionItem