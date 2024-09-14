// import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
// import "./Project.scss";
// import Button from "../../components/button/Button";
// import {openSource, socialMediaLinks} from "../../portfolio";
// import StyleContext from "../../contexts/StyleContext";
// import Loading from "../../containers/loading/Loading";

// export default function Projects() {
//   const GithubRepoCard = lazy(() =>
//     import("../../components/githubRepoCard/GithubRepoCard")
//   );
//   const FailedLoading = () => null;
//   const renderLoader = () => <Loading />;
//   const [repo, setrepo] = useState([]);
//   // todo: remove useContex because is not supported
//   const {isDark} = useContext(StyleContext);

//   useEffect(() => {
//     const getRepoData = () => {
//       fetch("/profile.json")
//         .then(result => {
//           if (result.ok) {
//             return result.json();
//           }
//           throw result;
//         })
//         .then(response => {
//           setrepoFunction(
//             response.data.user.pinnedItems.edges.map(item => ({
//               ...item,
//               imageUrl: "URL_TO_IMAGE" // Replace this with the actual image URL or logic to generate it
//             }))
//           );
//         })
//         .catch(function (error) {
//           console.error(
//             `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
//           );
//           setrepoFunction("Error");
//         });
//     };
//     getRepoData();
//   }, []);

//   function setrepoFunction(array) {
//     setrepo(array);
//   }

//   if (
//     !(typeof repo === "string" || repo instanceof String) &&
//     openSource.display
//   ) {
//     return (
//       <Suspense fallback={renderLoader()}>
//         <div className="main" id="opensource">
//           <h1 className="project-title">Open Source Projects</h1>
//           <div className="repo-cards-div-main">
//             {repo.map((v, i) => {
//               if (!v) {
//                 console.error(
//                   `Github Object for repository number : ${i} is undefined`
//                 );
//               }
//               return (
//                 <GithubRepoCard
//                   repo={v}
//                   key={v.node.id}
//                   isDark={isDark}
//                   imageUrl={v.imageUrl}
//                 />
//               );
//             })}
//           </div>
//           <Button
//             text={"More Projects"}
//             className="project-button"
//             href={socialMediaLinks.github}
//             newTab={true}
//           />
//         </div>
//       </Suspense>
//     );
//   } else {
//     return <FailedLoading />;
//   }
// }
import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() => import("../../components/githubRepoCard/GithubRepoCard"));
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  // Aggiungi 4 progetti manualmente
  useEffect(() => {
    const repoData = [
      {
        node: {
          id: 1,
          name: "Learnopia LMS",
          description:
            "The LMS platform is an online learning management system designed to facilitate education by allowing educators to create, distribute, and manage courses and educational materials. Utilizing Laravel as the development framework, Blade for templating, and Tailwind CSS and Bootstrap for the user interface design.",
          url: "https://github.com/serena-esse/Capstone-Learnopia-LMS",
        },

        videoUrl: "/video/learnopia.mp4", // URL video per il progetto 1
      },
      {
        node: {
          id: 2,
          name: "Fit Hub",
          description:
            "This Laravel application allows gym admins to create and manage courses with images, descriptions, and available spots. Users can browse courses and register by selecting a specific date and time, ensuring availability. The system simplifies course management and user registration for a smooth experience.",
          url: "https://github.com/serena-esse/U2-S7-L5-app-Palestra",
        },

        videoUrl: "/video/FitHub.mp4", // URL video per il progetto 2
      },
      {
        node: {
          id: 3,
          name: "Progetto 3",
          description: "Descrizione del progetto 3",
          url: "https://github.com/utente/progetto3",
        },

        videoUrl: "/video/progetto3.mp4", // URL video per il progetto 3
      },
      {
        node: {
          id: 4,
          name: "Progetto 4",
          description: "Descrizione del progetto 4",
          url: "https://github.com/utente/progetto4",
        },

        videoUrl: "/video/progetto4.mp4", // URL video per il progetto 4
      },
    ];

    setrepo(repoData);
  }, []);

  if (openSource.display && Array.isArray(repo)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v) => (
              <GithubRepoCard
                repo={v}
                key={v.node.id}
                isDark={isDark}
                videoUrl={v.videoUrl} // Passa l'URL video manualmente
              />
            ))}
          </div>
          <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
