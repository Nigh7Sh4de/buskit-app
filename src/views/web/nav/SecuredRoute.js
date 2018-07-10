import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class SecuredRoute extends Route {
  render() {
    const { loggedIn } = this.props

    if (!loggedIn) return <Redirect to="/login" />
    else return super.render()
  }
}

export default connect(({ user }) => ({
  loggedIn: !!user.user,
}), dispatch => ({

}))(SecuredRoute)