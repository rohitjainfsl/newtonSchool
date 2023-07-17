import React from 'react'

const data = [
    {
        country: "India",
        code: "IN",
        cities: ["Mumbai", "Delhi"]
    },
    {
        country: "Nepal",
        code: "NP",
        cities: ["Kathmandu", "ABC"]
    },
    {
        country: "Australia",
        code: "AU",
        cities: ["Perth", "Sydney"]
    },
]



function LoadData() {
  return (
    <select>
        {
            data.map(country => <option value={country.code}>{country.country}</option>)
        }
    </select>
  )
}

export default LoadData