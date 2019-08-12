'use strict'

import React from 'react'

const Title = (props) => (
  <h1>Olá {`${props.name} ${props.lastname}!`}</h1>
)

Title.defaultProps = {
  name: 'FirstName',
  lastname: 'LastName'
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: '',
//       lastname: ''
//     }
//   },
//   render: function () {
//     return (
//       <h1>Oie {this.props.name + ' ' + this.props.lastname}!</h1>
//     )
//   }
// })

export default Title
