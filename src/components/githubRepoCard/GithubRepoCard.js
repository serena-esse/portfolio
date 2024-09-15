// import React from "react";
// import "./GithubRepoCard.scss";

// const GithubRepoCard = ({repo, isDark, imageUrl}) => {
//   return (
//     <div className={`repo-card ${isDark ? "dark" : ""}`}>
//       <img
//         src={imageUrl}
//         alt={`${repo.node.name} image`}
//         className="repo-card-image"
//       />
//       <div className="repo-card-content">
//         <h2>{repo.node.name}</h2>
//         <p>{repo.node.description}</p>
//         <a href={repo.node.url} target="_blank" rel="noopener noreferrer">
//           View Repository
//         </a>
//       </div>
//     </div>
//   );
// };

// export default GithubRepoCard;

import React from "react";
import "./GithubRepoCard.scss";

const GithubRepoCard = ({ repo, isDark, imageUrl, videoUrl }) => {
  return (
    <div className={`repo-card ${isDark ? "dark" : ""}`}>
      {/* Se il video è disponibile, mostra il video, altrimenti mostra l'immagine */}
      {videoUrl ? (
        <video controls className="repo-card-video">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={imageUrl} alt={`${repo.node.name} image`} className="repo-card-image" />
      )}

      <div className="repo-card-content">
        <h2>{repo.node.name}</h2>
        <p>{repo.node.description}</p>
        <a href={repo.node.url} target="_blank" rel="noopener noreferrer" className="repo-link">
          View Repository
        </a>
      </div>
    </div>
  );
};

export default GithubRepoCard;
