// import { useUser } from "@clerk/clerk-react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const { isSignedIn, user, isLoaded } = useUser();
//   const { pathname } = useLocation();

//   console.log("isLoaded", isLoaded, "isSignedIn", isSignedIn, "user", user, "pathname", pathname);
//   if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
//     return <Navigate to="/?sign-in=true" />;
//   }

//   // Check onboarding status
//   if (
//     user !== undefined 
//     &&
//     !user?.unsafeMetadata?.role &&
//     pathname !== "/onboarding"
//   ) {
//     return <Navigate to="/onboarding" />;
//   }

//   return children;
// };

// export default ProtectedRoute;







const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  console.log("isLoaded", isLoaded, "isSignedIn", isSignedIn, "user", user, "pathname", pathname);

  if (isLoaded && !isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  if (
    isSignedIn &&
    user &&
    !user?.unsafeMetadata?.role &&
    pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" />;
  }

  return children;
};
