'use strict'

import React, {Component, Fragment} from 'react'
import AppContent from './components/app-content'
import axios from 'axios'
import './app.module.scss'
import { cons } from 'fp-ts/lib/NonEmptyArray2v'

class App extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            checkedUsers: [],
            discardedUsers: [],
            activeList: "all"
        }
        this.getUsers = this.getUsers.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.Button = this.Button.bind(this)
        this.menuOption = this.menuOption.bind(this)
    }

    componentDidMount(){
        this.getUsers()
    }

    getMarvelApiUrl (UserName) {
        const internalUser = UserName ? `/${UserName}` : ''
        return `http://localhost:8000/users${internalUser}`
    }

    async handleSearch (e) {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
            try {
              const {data} = await axios.get(this.getMarvelApiUrl(value))
              console.log(data)
              if (data.length === 0) {
                alert('User not found!')
                this.state.users
              }
              this.setState ({
                users: data
              })
            }
            catch(error) {
              alert('User not found!')
            }
        }
    }

    async getUsers () {
        try {
            const {data} = await axios.get(this.getMarvelApiUrl()) 
            this.setState ({
                users: data
            })
        }
        catch (error) {
            alert("Couldn't find the users!")
        }
    }

    Button (type, value) {
      try {
        const selectedUser = this.state.users.filter(user => user.login.username === value)
        if (type === "trash") {
          this.setState({
            discardedUsers: [...this.state.discardedUsers, selectedUser[0]]
          }, () => console.log(this.state.discardedUsers))
        }
        if (type === "all") {
          this.setState({
            allUsers: [...this.state.users,selectedUser[0]]
          }, () => console.log(this.state.allUsers))
        }
        if (type === "checked") {
          this.setState({
            checkedUsers: [...this.state.checkedUsers, selectedUser[0]]
          }, () => console.log(this.state.checkedUsers))
        }
      }
      catch (error) {
        alert("Couldn't add user to this category!")
      }
    }

     menuOption (type) {
      try {
        if (type === "trash") {
          this.setState({
            activeList: 'trash' 
          })
        }
        if (type === "all") {
          this.setState({
            activeList: 'all' 
          })
        }
        if (type === "checked") {
          this.setState({
            activeList: 'checked' 
          })
        }
      }
      catch (error) {
        alert("Couldn't find this category!")
      }
    }

    getActiveList () {
      const {
        activeList,
        users,
        discardedUsers,
        checkedUsers
      } = this.state
      if (activeList === 'all') {
        return users
      }
      if (activeList === 'trash') {
        return discardedUsers
      }
      return checkedUsers
    }

    render () {
        return (
          <Fragment>
              <AppContent
                {...this.state}
                getUsers={this.getUsers}
                activeList={this.getActiveList()}
                handleSearch={this.handleSearch}
                allButton={(value) => this.Button("all", value)}
                trashButton={(value) => this.Button("trash", value)}
                checkedButton={(value) => this.Button("checked", value)}
                menuAllUsers={() => this.menuOption("all")}
                menuCheckedUsers={() => this.menuOption("checked")}
                menuDiscardedUsers={() => this.menuOption("trash")}
              />
          </Fragment>
        )
    }
}

export default App