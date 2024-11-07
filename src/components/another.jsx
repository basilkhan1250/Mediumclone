// import React, { useState } from 'react';

// const DataDisplay = () => {
//     const data = [
//         { id: 1, title: 'Item 1', description: 'This is the first item' },
//         { id: 2, title: 'Item 2', description: 'This is the second item' },
//         { id: 3, title: 'Item 3', description: 'This is the third item' },
//     ];

//     const [selectedItem, setSelectedItem] = useState(null);

//     const handleClick = (item) => {
//         setSelectedItem(item);
//     };

//     return (
//         <div>
//             <div className="data-list">
//                 {data.map((item) => (
//                     <button key={item.id} onClick={() => handleClick(item)}>
//                         {item.title}
//                     </button>
//                 ))}
//             </div>
            
//             {selectedItem && (
//                 <div className="data-details">
//                     <h3>{selectedItem.title}</h3>
//                     <p>{selectedItem.description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DataDisplay;
