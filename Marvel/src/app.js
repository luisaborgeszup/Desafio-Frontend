'use strict'

import React, {
  Component,
  Fragment
} from 'react'
import AppContent from './components/app-content'
import axios from 'axios'
import './app.module.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      checkedUsers: [],
      discardedUsers: [],
      activeList: "all",
      selectedTrash: false,
      selectedAll: true,
      selectedChecked: false
    }
    this.getUsers = this.getUsers.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.Button = this.Button.bind(this)
    this.menuOption = this.menuOption.bind(this)
  }

  componentDidMount() {
    this.getUsers()
  }

  getMarvelApiUrl(list, type, data) {
    const userData = data ? `/${data}` : ''
    const userType = type ? `/${type}` : ''
    const userList = list ? `/${list}` : ''
    return `http://localhost:8000${userList}${userType}${userData}`
  }

  async handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const BACKSPACE = 8
    const DELETE = 46

    if (keyCode === ENTER) {
      try {
        if (value.search("@") > -1) {
          const {
            data
          } = await axios.get(this.getMarvelApiUrl("users", "emails", value))
          if (data.length === 0) {
            alert('User not found!')
          }
          if (this.state.activeList === "all") {
            return this.setState({
              users: data
            })
          }
          if (this.state.activeList === "checked") {
            return this.setState({
              checkedUsers: data
            })
          }
          if (this.state.activeList === "trash") {
            return this.setState({
              discardedUsers: data
            })
          }
        }
        const {
          data
        } = await axios.get(this.getMarvelApiUrl("users", "names", value))
        if (data.length === 0) {
          alert('User not found!')
        }
        if (this.state.activeList === "all") {
          this.setState({
            users: data
          })
        }
        if (this.state.activeList === "checked") {
          this.setState({
            checkedUsers: data
          })
        }
        if (this.state.activeList === "trash") {
          this.setState({
            discardedUsers: data
          })
        }
      } catch (error) {
        alert('User not found!')
      }
    }

    if (keyCode === (BACKSPACE || DELETE)) {
      const {
        data
      } = await axios.get(this.getMarvelApiUrl("users"))
      this.setState({
        users: data
      })
    }
  }

  async getUsers() {
    try {
      const {
        data: dataUsers
      } = await axios.get(this.getMarvelApiUrl("users"))
      this.setState({
        users: dataUsers
      })
      const {
        data: dataCheckedUsers
      } = await axios.get(this.getMarvelApiUrl("checked"))
      this.setState({
        checkedUsers: dataCheckedUsers
      })
      const {
        data: dataDiscartedUsers
      } = await axios.get(this.getMarvelApiUrl("discarted"))
      this.setState({
        discardedUsers: dataDiscartedUsers
      })      
    } catch (error) {
      alert("Couldn't find the users!")
    }
  }

  Button(type, value) {
    try {
      const selectedUser = this.state.users.filter(user => user.login.username === value)
      const selectedCheckedUser = this.state.checkedUsers.filter(user => user.login.username === value)
      const selectedDiscartedUser = this.state.discardedUsers.filter(user => user.login.username === value)
      const indexUser = this.state.users.indexOf(selectedUser[0])
      const indexDiscartedUser = this.state.discardedUsers.indexOf(selectedDiscartedUser[0])
      const indexCheckedUser = this.state.checkedUsers.indexOf(selectedCheckedUser[0])

      if (type === "trash") {
        if (selectedUser.length !== 0) {
          selectedUser[0]["class"] = "discarted"
          this.state.users.splice(indexUser, 1)
          this.setState({
            discardedUsers: [...this.state.discardedUsers, selectedUser[0]],
          }, () => axios.put(this.getMarvelApiUrl("users", "emails", selectedUser[0]["email"]), {
            ...selectedUser[0]
          }))
        }
        if (selectedCheckedUser.length !== 0) {
          selectedCheckedUser[0]["class"] = "discarted"
          this.state.checkedUsers.splice(indexCheckedUser, 1)
          this.setState({
            discardedUsers: [...this.state.discardedUsers, selectedCheckedUser[0]]
          }, () => axios.put(this.getMarvelApiUrl("users", "emails", selectedCheckedUser[0]["email"]), {
            ...selectedCheckedUser[0]
          }))
        }
      }
      if (type === "all") {
        if (selectedDiscartedUser.length !== 0) {
          selectedDiscartedUser[0]["class"] = "all"
          this.state.discardedUsers.splice(indexDiscartedUser, 1)
          this.setState({
            users: [selectedDiscartedUser[0], ...this.state.users]
          }, () => axios.put(this.getMarvelApiUrl("users", "emails", selectedDiscartedUser[0]["email"]), {
            ...selectedDiscartedUser[0]
          }))
        }
        if (selectedCheckedUser.length !== 0) {
          selectedCheckedUser[0]["class"] = "all"
          this.state.checkedUsers.splice(indexCheckedUser, 1)
          this.setState({
            users: [selectedCheckedUser[0], ...this.state.users]
          }, () => axios.put(this.getMarvelApiUrl("users", "emails", selectedCheckedUser[0]["email"]), {
            ...selectedCheckedUser[0]
          }))
        }
      }
      if (type === "checked") {
        if (selectedUser.length !== 0) {
          selectedUser[0]["class"] = "checked"
          this.state.users.splice(indexUser, 1)
          this.setState({
            checkedUsers: [...this.state.checkedUsers, selectedUser[0]],
          }, () => axios.put(this.getMarvelApiUrl("users", "emails", selectedUser[0]["email"]), {
            ...selectedUser[0]
          }))
        }
        if (selectedDiscartedUser.length !== 0) {
          selectedDiscartedUser[0]["class"] = "checked"
          this.state.discardedUsers.splice(indexDiscartedUser, 1)
          this.setState({
            checkedUsers: [...this.state.checkedUsers, selectedDiscartedUser[0]]
          }, () => axios.put(this.getMarvelApiUrl("users", "emails", selectedDiscartedUser[0]["email"]), {
            ...selectedDiscartedUser[0]
          }))
        }
      }
    } catch (error) {
      alert("Couldn't add user to this category!")
    }
  }

  menuOption(type) {
    try {
      if (type === "trash") {
        this.setState({
          activeList: 'trash',
          selectedTrash: true,
          selectedChecked: false,
          selectedAll: false
        })
      }
      if (type === "all") {
        this.setState({
          activeList: 'all',
          selectedAll: true,
          selectedTrash: false,
          selectedChecked: false
        })
      }
      if (type === "checked") {
        this.setState({
          activeList: 'checked',
          selectedChecked: true,
          selectedTrash: false,
          selectedAll: false
        })
      }
    } catch (error) {
      alert("Couldn't find this category!")
    }
  }

  getActiveList() {
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

  render() {
    return ( 
      <Fragment>
        <AppContent 
          {
          ...this.state
        }
        getUsers = {
          this.getUsers
        }
        activeList = {
          this.getActiveList()
        }
        handleSearch = {
          this.handleSearch
        }
        allButton = {
          (value) => this.Button("all", value)
        }
        trashButton = {
          (value) => this.Button("trash", value)
        }
        checkedButton = {
          (value) => this.Button("checked", value)
        }
        menuAllUsers = {
          () => this.menuOption("all")
        }
        menuCheckedUsers = {
          () => this.menuOption("checked")
        }
        menuDiscardedUsers = {
          () => this.menuOption("trash")
        }
        /> 
      </Fragment>
    )
  }
}

export default App