import React from 'react'

const BookHikeformInfoContainer = ({img, hike, weather, temperature, terrain}) => {
  return (
    <div className="bookHikeFormHikeInfoContainer">
          <img src={img} alt="hike" />
          <table>
            <tbody>
              <tr>
                <th />
                <th />
              </tr>
              <tr>
                <td>
                  <i className="fas fa-walking" /> {hike}
                </td>
                <td>
                  <i className="fas fa-cloud" /> {weather}
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-thermometer-empty" /> {temperature}
                </td>
                <td>
                  <i className="fas fa-map-marked" /> {terrain}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default BookHikeformInfoContainer;