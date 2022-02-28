import React from 'react';

function BookItem() {
  return (
    <div className="BookContainer">
      <div className="TitleContainer">
        <p className="Genre">Category</p>
        <p className="BookTitle">Title</p>
        <p className="BookAuthor">Author</p>
        <button type="button" className="Remove">Remove</button>
      </div>
      <div className="graphContainer">
        <div className="percentageContainer" />
        <div className="graphParagraph">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressContainer" />
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn btn">Update Progress</button>
      </div>
    </div>
  );
}

export default BookItem;
