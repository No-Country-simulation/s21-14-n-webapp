import React from 'react'

const WhatsappFloatingButton = () => 
{
  
    return (
        <a href="" className="fixed bottom-20 right-10 bg-emerald-400 h-12 w-12  rounded-full flex items-center justify-center
        dark:bg-neutral-400 dark:hover:bg-emerald-500 transition-all duration-300
        " target="_blank">
          <svg className="h-6 w-6 fill-current text-white"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63Z"/></svg>
        </a>
    );
};
  

export default WhatsappFloatingButton