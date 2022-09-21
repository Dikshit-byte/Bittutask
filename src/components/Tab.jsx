import React from 'react';

function Tab() {
  return (
    <div className='h-20 flex flex-row bg-slate-500 justify-between'>
        <div className="md:text-4xl ml-20 p-4 cursor-pointer text-white" >Food Items </div>
            <img src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" alt="icons" className='h-20 relative'/>
        <div className="md:text-4xl mr-20 p-4 pr-20 cursor-pointer text-white">Rating</div>
    </div>
  )
}

export default Tab;