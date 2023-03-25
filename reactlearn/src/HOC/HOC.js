import React, { Component } from 'react'

//write 1st HOC
const withLearnReact=(Comp)=>{
    const NewComponent=(props)=>{
        return <Comp {...props} name="Welcome to learn react"></Comp>

    }
    return NewComponent
}

 class HOC extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to try HOC</h1>
        {this.props.title}
        <p>name: {this.props.name}</p>
      </div>
    )
  }
}


export default withLearnReact(HOC)