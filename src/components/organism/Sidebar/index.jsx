import React, { useState } from "react";

const Sidebar = ({ show = false, children, className}) => {
  const [op,setOp] = useState(show)
  console.log('show', show)
  console.log('op', op)
  return (
    <>
      <aside className="bg-white h-screen w-3/4">
        <div className="flex flex-col">
            <button onClick={()=>setOp(false)} className="flex justify-end">close</button>
            {children}
          </div>
      </aside>
    </>
    // <div className={`
    //   ${show == op 
    //   ? "absolute z-10" 
    //   : "hidden lg:flex"
    //   } 
    //   w-full lg:relative flex-col gap-2 bg-black/50 h-full
    // `}
    // onClick={()=>setOp(!op)}
    // >
    //   <aside
    //     className={`
    //     flex lg:hidden
    //     ${className} 
    //     w-10/12 lg:relative lg:w-2/12 flex-col gap-2 bg-white h-full p-4
    //     `}
    //   >
    //     <div className="flex flex-col">
    //       <button onClick={()=>setOp(!op)} className="flex justify-end">close</button>
    //       {children}
    //     </div>
    //   </aside>
    // </div>
  );
};

export default Sidebar;
