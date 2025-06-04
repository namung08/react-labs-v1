import { useEffect } from "react";

export const MountLog = () => {
  useEffect(() => {
    console.log("Mount!");
  }, []);

  return <div>Mount!</div>;
};
