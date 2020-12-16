import React, { Component } from "react";

class AddFishForm extends Component {
  render() {
    return (
      <form className="fish-edit">
        <input name="name" type="text" placeholder="Name"/>
        <input name="price" type="text" placeholder="Price"/>
        <select name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Desc"></textarea>
        <input name="imge" type="text" placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
    </form>
    )
  }
}

export default AddFishForm;