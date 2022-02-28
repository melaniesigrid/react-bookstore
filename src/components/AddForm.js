import React from 'react';

function AddForm() {
  return (
    <div>
      <form className="AddNew">
        <label htmlFor="title">
          <input id="title" placeholder="Title" required />
        </label>
        <label htmlFor="author">
          <input id="author" placeholder="Author" />
        </label>
        <label htmlFor="genre">
          <select className="bookSelect" id="genre" required>
            <option value="Unknown">Genre</option>
            <option value="Action">Action</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Economy">Economy</option>
            <option value="Romance">Romance</option>
          </select>
        </label>
        <button type="submit" className="Add">Add</button>
      </form>
    </div>
  );
}

export default AddForm;