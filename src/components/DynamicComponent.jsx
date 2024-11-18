// import React from "react";
// import { Link } from "react-router-dom";
// import Blogs from "./Blogs";

// const DynamicComponent = (props) => {

//     return (
//         <Link >
//             <div className="dynamic-data">
//                 <div className="text-content">
//                     <p className="name">{props.names}</p>
//                     <h2 className="title">{props.title}</h2>
//                     <p className="content">{props.content}</p>
//                     <div className="other-data">
//                         <p>{props.date}</p>
//                         <p>{props.likes}</p>
//                         <p>{props.comments}</p>
//                     </div>
//                 </div>
//                 <div className="img-div">
//                     <img src={props.image} alt="imgaes" />
//                 </div>
//             </div>
//         </Link>
//     )

// }

// export default DynamicComponent;









import React from "react";
import { Link } from "react-router-dom";

const DynamicComponent = (props) => {
    return (
        <div>
            <div className="dynamic-data">
                <div className="text-content">
                    <Link
                        to={ props.i
                            // pathname: "/blogs",
                            // state: {
                            //     name: props.names,
                            //     title: props.title,
                            //     content: props.content,
                            //     date: props.date,
                            //     likes: props.likes,
                            //     comments: props.comments,
                            //     image: props.image,
                            // },
                        }>
                        <p className="name">{props.names}</p>
                        <h2 className="title">{props.title}</h2>
                        <p className="content">{props.content}</p>
                        <div className="other-data">
                            <p>{props.date}</p>
                            <p>{props.likes}</p>
                            <p>{props.comments}</p>
                        </div>
                    </Link>
                </div>
                <div className="img-div">
                    <img src={props.image} alt="images" />
                </div>
            </div>
        </div >
    );
};

export default DynamicComponent;
