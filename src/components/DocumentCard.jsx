import React from "react";

const DocumentCard = (props) => {
  return (
    <>
      <div className="docCard">
        <h4>{props.docTitle}</h4>
        <p>{props.docDesc}</p>
          <a href={props.url} className="linkArrow">
            <span>↗</span>
          </a>
      </div>
    </>
  );
};

export default DocumentCard;
