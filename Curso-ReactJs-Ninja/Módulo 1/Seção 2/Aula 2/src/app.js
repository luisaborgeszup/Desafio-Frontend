'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => { // setState é assíncrono
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar Conteúdo
        </label>

        {this.state.showContent && <div>Olha eu aqui</div>}
      </div>
    )
  }
}

export default App

// import Timer from './timer'

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       time: 0,
//       showTimer: true
//     }
//   }

//   render () {
//     return (
//       <div>
//         <Timer time={this.state.time} />
//         <button onClick={() => {
//           this.setState({ time: this.state.time + 10 })
//         }}>Change props</button>
//       </div>
// <div>
//   <Square color={this.state.color} />
//   {['purple', 'pink', 'lightblue'].map((color) => (
//     <Button
//       key={color}
//       handleClick={() => this.setState({ color })}>
//       {color}
//     </Button>
//   ))}
// </div>
//     )
//   }
// }

// export default App

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Luisa' lastname='Lichfett' />
//         <label htmlFor='input'>Input</label>
//         <input type='text' id='input' />
//       </div>
//     )
//   }
// })

// class App extends Component {
//   render () {
//     return (
//       <div>
//         <Button handleClick={() => console.log('blab')}>
//           Hit that
//         </Button>
//       </div>
//     )
//   }
// }

// constructor () {
//   super()
//   this.state = {
//     value: 'Valor Inicial',
//     checked: false
//   }
// }

// render () {
//   return (
//     <div>
//       <form>
//         <input type='text' defaultValue='Valor Inicial' /* value={this.state.value} */ onChange={(e) => {
//           // console.log(e.target)
//           this.setState({ value: e.target.value })
//         }} />

//         <label>
//           <input
//             type='checkbox'
//             value='checkbox'
//             defaultChecked={false} // uncontrolled way
//             // checked={this.state.checked} /controlled way
//             // onChange={(e) => {
//             //   this.setState({ checked: !this.state.checked })
//             // }}
//           />
//           Checkbox
//         </label>

//         <input type='radio' name='rd' value='1' />Radio 1
//         <input type='radio' name='rd' value='1' />Radio 1

//       </form>
//     </div>
//   )
// }

// constructor () {
//   super()
//   this.state = {
//     value: '2'
//   }
// }
// <select /* multiple */
//   value={this.state.value} onChange={(e) => {
//     this.setState({
//       value: e.target.value
//     })
//   }}>
//   <option value='1'>Opção 1</option>
//   <option value='2'>Opção 2</option>
//   <option value='3'>Opção 3</option>
// </select>

// <textarea name='textarea' defaultValue='Texto' />

// <form
//   onSubmit={(e) => {
//     e.preventDefault()
//     console.log('event', e)
//   }}

//   onChange={(e) => {
//     console.log('name', e.target.name)
//     console.log('value', e.target.value)
//   }}>

//   <input type='name' name='name' />
//   <input type='email' name='email' />

//   <input type='checkbox' />
//   <button type='submit'>Enviar</button>
// </form>
