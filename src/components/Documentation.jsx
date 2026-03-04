import React from "react";
import DocumentCard from "./DocumentCard";

const Documentation = () => {
  return (
    <>
      <div className="documentation">
        <h3>Documentation</h3>
        <div className="docCardContainer">
          <DocumentCard
            docTitle="Installation"
            docDesc="Creating a react app, build a react app from scratch, and add react to an existing project."
            url="installation"
          />

          <DocumentCard
            docTitle="Setup"
            docDesc="React integrates with tools like editors, TypeScript, browser extensions, and compilers. This section will help you get your environment set up."
            url=""
          />

          <DocumentCard
            docTitle="React Compiler"
            docDesc="Introduction, installation, incremental adoptions, debugging and troubleshooting."
            url=""
          />

          <DocumentCard
            docTitle="Hooks"
            docDesc="Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React."
            url=""
          />
        </div>
      </div>
    </>
  );
};

export default Documentation;
