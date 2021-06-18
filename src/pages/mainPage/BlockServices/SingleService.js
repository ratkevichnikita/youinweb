// import React from 'react';
// import classes from "./BlockServices.module.css";
// import OnMouseHover from "../../../common/OnMouseHover/OnMouseHover";
// import {Link} from "react-router-dom";
// import sprite from "../../../assets/images/sprite/sprite.svg";
//
// const SingleService = ({}) => {
//   return (
//     <li key={item.id} className={classes.item}>
//       <OnMouseHover>
//         <Link to={`./vare-tjenester/${item.slug}`} className={classes.name}>
//           {item.name}
//           <svg width="24" height="24">
//             <use href={sprite + '#arrow'}/>
//           </svg>
//         </Link>
//       </OnMouseHover>
//       <OnMouseHover onMouseMove={(e) => handleMove(e)} ref={container}>
//         <Link ref={customBtn} to={`/cases/${item.label}`} className={classes.more}>
//           <span >See works</span>
//         </Link>
//       </OnMouseHover>
//       <p className={classes.description}>{item.description}</p>
//     </li>
//   );
// };
//
// export default SingleService;