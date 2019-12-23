import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { unsplash } from "../config";

export default class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${unsplash.access_key}`
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "25px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
