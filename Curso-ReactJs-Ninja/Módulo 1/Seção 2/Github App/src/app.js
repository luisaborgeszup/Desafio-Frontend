'use strict'

import React, {Component, Fragment} from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'
import './app.module.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getGithubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true,
      })
      ajax({ 'Authorization': 'token 1ce81e1717178f69393cd44d444634e308c9156f' }).get(this.getGithubApiUrl(value)).then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      }).always(() => {
        this.setState({
          isFetching: false
        })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax({ 'Authorization': 'token 1ce81e1717178f69393cd44d444634e308c9156f' }).get(this.getGithubApiUrl(username, type)).then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
    }
  }

  render () {
    return (
      <Fragment>
        <AppContent 
          {...this.state}
          handleSearch={this.handleSearch}
          getRepos={this.getRepos('repos')}
          getStarred={this.getRepos('starred')}
        />
      </Fragment>
    )
  }
}

export default App
