import React from "react";

const ImageSearch = (props) => {
  return (
    <div>
      <form onSubmit={props.handleGetRequest}>
        <input
          type='text'
          autoComplete='off'
          name='searchValue'
          placeholder='Type, to let the alien start searching'
        />
        <button>
          <span role='img' aria-label='Search'>
            👾
          </span>
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
