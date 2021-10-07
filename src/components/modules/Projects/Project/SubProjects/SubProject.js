import React from "react";
import { useRouter } from "next/router";


const SubProject = () => {
    const router = useRouter();
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
    return (
        <div>
            Inside SubProject 
        </div>
    )
}

export default SubProject
