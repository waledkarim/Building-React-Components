import { useState } from "react";

const VirtualisedList = ({ items, rowHeight, containerHeight }) => {

  const [scrollTop, setScrollTop] = useState(0)
  const totalHeight = items.length * rowHeight;
  const noOfVisibleItems = Math.floor(containerHeight / rowHeight);
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = (startIndex + noOfVisibleItems);
  const visibleItems = items.slice(startIndex, endIndex);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  }
  

  const renderedItems = visibleItems.map((item, ind) => {
    
      const actualIndex = startIndex + ind;
      const top = actualIndex * rowHeight;

      return (
        //each of the rows
      <div key={ind} style={{height: `${rowHeight}px`, top: `${top}px`}} className={`absolute text-center w-full odd:bg-red-500`}>
          {
              item.label
          }
      </div>
      )

  });

  return (
    //scroll container
    <div onScroll={handleScroll} style={{height: `${containerHeight}px`}} className={`relative overflow-y-auto w-[400px] border border-black`}>
       <div style={{height: `${totalHeight}px`}}>
        {
            renderedItems
        }
       </div>
    </div>
  )
}

export default VirtualisedList;