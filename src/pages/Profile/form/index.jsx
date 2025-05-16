// import React, { useEffect, useState } from "react";
// import { database } from "../../../firebase";
// import { ref, child, push, update, set } from "firebase/database";

// export const Form = (props) => {
//     const { product } = props;
//     const [data, setData] = useState("");

//     const updateData = async () => {
//         const db = database;
//         const updatedProduct = push(ref(db, `products/-O0mEIZIoCjQ2IAy9je3`), {
//             ...product,
//             name: data,
//         });

//         update(updatedProduct)
//             .then(() => {
//                 alert("data updated successfully");
//             })
//             .catch((error) => {
//                 console.log(error, "ups error");
//             });
//     };

//     const changeInput = (e) => {
//         setData(e.target.value);
//     };

//     useEffect(() => {
//         product && setData(product?.name);
//     }, [product]);

//     return (
//         <div>
//             <input
//                 value={data}
//                 type="text"
//                 onChange={(event) => changeInput(event)}
//             />

//             {/* <button onClick={() => updateData()}>Edit</button> */}
//         </div>
//     );
// };
