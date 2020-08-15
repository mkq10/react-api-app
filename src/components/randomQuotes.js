import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class RandomQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isLoaded: false };
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ isLoaded: true, items: data });
      })
      .catch(console.log);
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return "Data not loaded";
    } else {
      return (
        <div className="test">
          {/* <ul>
            {items.map((item) => (
              <li>{item.address["street"]}</li>
            ))}
          </ul> */}

          <div class="container bg-light">
            <center>
              <q> {items["content"]}</q>
              <strong>
                <em class="temp">{items["author"]}</em>
              </strong>
              <span class="description"> ({items["tags"]})</span>
            </center>
          </div>
        </div>
      );
    }
  }
}

export default RandomQuotes;
