import React from "react";

const ImageList = (props) => {
  console.log(props);

  return (
    <div>
      {props.images.map(({ id, pageURL, tags }) => {
        return (
          <div key={id}>
            <img src={pageURL} alt={tags} />
            <button>Search</button>
          </div>
        );
      })}
    </div>
  );
};
export default ImageList;
