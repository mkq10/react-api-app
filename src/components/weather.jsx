import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

var inputValue = document.querySelector(".city_name");
var button = document.querySelector(".submitBtn");
var name = document.querySelector(".name");
var description = document.querySelector(".description");
var temp = document.querySelector(".temp");
button.addEventListener("click", function () {
  // inputValue = inputValue.value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=de86fad41c0f6c7b7331cbab690d3693"
  )
    .then((res) => res.json())
    .then((data) => {
      name.innerHTML = data["name"];
      temp.innerHTML = Math.round(data["main"]["temp"] - 273.15) + " °C";
      description.innerHTML = data["weather"][0]["description"];
    })
    .catch(console.log);
});
// class Weather extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], isLoaded: false };
//   }

//   button.addEventListener("click", function () {
//   componentWillMount() {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         inputValue.value +
//         "&appid=de86fad41c0f6c7b7331cbab690d3693"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ isLoaded: true, items: data });
//       })
//       .catch(console.log);
//   }
//   });

//   render() {
//     var { isLoaded, items } = this.state;
//     if (!isLoaded) {
//       return "Data not loaded";
//     } else {
//       return (
//         <div className="test">
//           {/* <ul>
//             {items.map((item) => (
//               <li>{item.address["street"]}</li>
//             ))}
//           </ul> */}
//         </div>
//       );
//     }
//   }
// }

// export default Weather;
