import React from "react";

const DocumentCard = (props) => {
  return (
    <>
      <div className="docCard">
        <div style={{
          fontSize: '1.25rem', fontWeight:'600'
        }}>{props.docTitle}</div>
        <p>{props.docDesc}</p>
          <a href={props.url} className="linkArrow">
            <span>↗</span>
          </a>
      </div>
    </>
  );
};

export default DocumentCard;
