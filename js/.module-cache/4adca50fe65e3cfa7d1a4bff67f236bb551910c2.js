import React from 'react'
import ReactDOM from 'react-dom'

export default class TimeLine extends React.Component {
    render(){
        return (
            React.createElement("div", null, 
              React.createElement("p", null, "タイムライン")
            )
        )
    }
}
