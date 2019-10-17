'use strict'

import React, {Component, Fragment} from 'react'
import AppContent from './components/app-content'
import axios from 'axios'
import './app.module.scss'

class App extends Component {
    constructor () {
        super()
        this.state = {
            users: []
        }
        this.getUsers = this.getUsers.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount(){
        this.getUsers()
    }

    getMarvelApiUrl (UserName, menuClass) {
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
            //     this.setState ({
            //         UserInfo: {
            //             id: data.id,
            //             link: data.link,
            //             name: data.name.first,
            //             username: data.login.username,
            //             email: data.email,
            //             phone: data.phone,
            //             location: {
            //                 city: data.city,
            //                 state: data.state
            //             }
            //         }
            //     })
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

    render () {
        return (
          <Fragment>
              <AppContent
                {...this.state}
                getUsers={this.getUsers}
                handleSearch={this.handleSearch}
              />
          </Fragment>
        )
    }
}

export default App