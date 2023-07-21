import React, { Component } from 'react'
import arrays from './arrays'

export default class Cel extends Component {
  render() {
    return (
      <div>
        {arrays.map((array: any, index: number) => (
            <div className='' key={index}>{}</div>
        ))}
      </div>
    )
  }
}
