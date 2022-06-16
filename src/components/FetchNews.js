import { useState } from "react";
import React from "react";
import axios from "axios";

export default function FetchNews() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-05-16&sortBy=publishedAt&apiKey=b9ad7f53ceda450eb6ed4aec8eaabf9f"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              {" "}
              FetchNews
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">
                      {value.url}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// import { useState } from "react";
// import React from "react";
// import axios from "axios";

// export default function FetchNews() {
//   const [news, setNews] = useState([]);

//   const fetchNews = () => {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?q=tesla&from=2022-05-16&sortBy=publishedAt&apiKey=b9ad7f53ceda450eb6ed4aec8eaabf9f"
//       )
//       .then((response) => {
//         setNews(response.data.articles);
//       });
//   };

//   return (
//     <>
//       <div className="btn btn-primary">
//         <div className="row">
//           <div className="col-4">
//             <button className="btn btn-primary" onClick={fetchNews}>
//               {" "}
//               FetchNews
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           {news.map((value) => {
//             return (
//               <div className="col-4">
//                 <div className="card" style={{ width: "18rem" }}>
//                   <img
//                     src={value.urlToImage}
//                     className="card-img-top"
//                     alt="..."
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{value.title}</h5>
//                     <p className="card-text">{value.description}</p>
//                     <a href="#" className="btn btn-primary">
//                       {value.url}
//                       Go somewhere
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
