import React, { Component } from "react";
import { getCars } from "../services/carAd";
class HomePage extends Component {
  state = {
    cars: [],
  };

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <table>
          <thead></thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>{car.model}</td>
                <td>{car.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
