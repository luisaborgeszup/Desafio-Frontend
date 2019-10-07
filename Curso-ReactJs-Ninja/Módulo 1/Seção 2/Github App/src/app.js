'use strict'

import React, {Component, Fragment} from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'
import './app.module.scss'
import pagination from './utils/pagination/index'

const initialReposState = {
  repos: [],
  pagination: {
    total: 1,
    activePage: 1
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: initialReposState,
      starred: initialReposState,
      isFetching: false,
      firstSearch: true,
      selectedRepos: true
    }

    this.perPage = 7
    this.handleSearch = this.handleSearch.bind(this)
    this.getRepos = this.getRepos.bind(this)
  }

  getGithubApiUrl (username, type, page = 1) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}?per_page=${this.perPage}&page=${page}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      ajax({ 'Authorization': 'token 11c6b675c04a32b7ba455bf5e51d2c1ac811ec47' }).get(this.getGithubApiUrl(value)).then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: initialReposState,
          starred: initialReposState
        })
      })
        .always(() => {
          this.setState({
            isFetching: false,
            firstSearch: false
          })
        })
        .catch(e => {
          alert('User not found!')
          if (this.state.userinfo) {
            return this.setState({
              isFetching: false,
              firstSearch: false
            })
          }
          return this.setState({
            isFetching: false,
            firstSearch: true
          })
        })
    }
  }

  getRepos (type, page) {
    const username = this.state.userinfo.login
    ajax({ 'Authorization': 'token 11c6b675c04a32b7ba455bf5e51d2c1ac811ec47' }).get(this.getGithubApiUrl(username, type, page)).then((result, xhr) => {
      const linkHeader = xhr.getResponseHeader("Link") || ''
      const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last/)
      if (type === 'repos') {
        this.setState({
          selectedRepos: true,
          starred: initialReposState
        })
      }

      if (type === 'starred') {
        this.setState({
          selectedRepos: false,
          repos: initialReposState
        })
      }

      this.setState({
        [type] : {
          repos: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          })),
          pagination: {
            total: totalPagesMatch 
              ? +totalPagesMatch[1]
              : this.state[type].pagination.total,
            activePage: page
          }
        }
      })
    })
  }
  

  render () {
    return (
      <Fragment>
        <AppContent
          {...this.state}
          handleSearch={this.handleSearch}
          handlePagination={(type, page) => this.getRepos(type, page)}
          getRepos={() => this.getRepos('repos')}
          getStarred={() => this.getRepos('starred')}
        />
      </Fragment>
    )
  }
}

export default App
