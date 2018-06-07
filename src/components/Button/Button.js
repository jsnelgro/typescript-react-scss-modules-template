import React from "react"
import './Button.module.scss'

export class Button extends React.Component {
  doThing(val: any): undefined {
    console.log("click event:", val)
  }

  render() {
    return <button
      styleName="root"
      onClick={this.doThing}>{this.props.children}</button>
  }
}

export default Button