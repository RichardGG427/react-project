import React, { Component } from "react";

import { connect } from 'react-redux'
import {add,minus,asyncAdd} from './count.redux'

// //return data function, for connect. connect will convert data to props
// const mapStateToProps=(state)=>{
//     return {
//         count:state
//     }
// }

// //return dispatch's function, for connect, connect will convert dispatch to props
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         add:()=>dispatch({type:'add'}),
//         minus:()=>dispatch({type:'minus'}),
//     }
// }

@connect(
    // state=>{
    //     return {
    //         count:state
    //     }
    // }
    state=>({count:state}),
    {add,minus,asyncAdd}
    // dispatch=>({
    //     add:()=>dispatch({type:'add'}),
    //     minus:()=>dispatch({type:'minus'}),
    // })

    // {
    //     add:()=>({type:'add'}),
    //     minus:()=>({type:'minus'}),
    //     asyncAdd:()=>dispatch=>{
    //         setTimeout(()=>{
    //             dispatch({type:'add'})
    //     },2000)
            
    //     }
    // }
)


class ReactRedux extends Component {
  render() {
    return (
      <div>
        <h1>learn redux ,write a accumulator</h1>
        {/* the function to get state in react-redux */}
        {this.props.count}

        <div>
          <button onClick={() => this.props.add()}>Add 1</button>
          <button onClick={() => this.props.minus()}>
            Minus 1
          </button>
          <button onClick={() => this.props.asyncAdd()}>async Add 1</button>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps,mapDispatchToProps)(ReactRedux)
export default ReactRedux