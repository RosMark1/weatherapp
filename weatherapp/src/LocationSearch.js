import React from 'react'
import './LocationSearch.css'


export const locations = [{
  name: "Tel Aviv",
  latitude: 32.08,
  longitude: 34.78
}, {
  name: "Haifa",
  latitude: 32.82,
  longitude: 34.99
}, {
  name: "Eilat",
  latitude: 29.56,
  longitude: 34.95
}, {
  name: "Ashdod",
  latitude: 31.79,
  longitude: 34.65
}, {
  name: "Netivot",
  latitude: 31.42,
  longitude: 34.59
}]

export default function LocationSearch(props) {
  const {onLocationChange} = props;
  return (
    <div>
        {/* <input type='text' placeholder='Search...'></input> */}
        <select onChange={e => onLocationChange(e.target.value)}>
          {locations.map((location, index) => <option value={index}>{location.name}</option>)}
          {/* <option value="tel-aviv">Tel-Aviv</option>
          <option value="haifa">Haifa</option>
          <option value="eilat">Eilat</option>
          <option value="netivot">Netivot</option>
          <option value="ashdod">Ashdod</option> */}
        </select>
    </div>
  )
}
