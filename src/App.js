import React from "react";
import FetchNews from "./components/FetchNews";

export default function App() {
  return (
    <div>
      <FetchNews />
    </div>
  );
}

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function App() {
//   const [result, setResult] = useState([]);

//   const fetch = () => {
//     const URL = "https://jsonplaceholder.typicode.com/users";
//     axios
//       .get(URL)
//       .then((data) => {
//         setResult(data.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetch();
//   });

//   return (
//     <div>
//       {result.map((user) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// }

// export default App;
// export default App;
// import axios from "axios";
// import React from "react";
// import { useEffect, useState } from "react";

// const App = () => {
//   const [result, setResult] = useState([]);

//   console.log(result);
//   const fetch = () => {
//     const URL = "https://jsonplaceholder.typicode.com/comments";
//     axios
//       .get(URL)
//       .then((data) => {
//         setResult(data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     fetch();
//   });
//   return (
//     // <div>
//     //   {result.map((user) => (
//     //     <div key={user.id}>{user.name}</div>
//     //   ))}
//     // </div>

//     <div>
//       {result.map((user) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// };

// export default App;
