import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import BasePage from '../component/BasePage'
import ZiltagMapLoginForm from '../component/ZiltagMapLoginForm'
import ZiltagMapSignUpForm from '../component/ZiltagMapSignUpForm'
import * as actors from '../actor'


class ZiltagMapPage extends Component {
  constructor(props) {
    super(props)
    this.actors = bindActionCreators(actors, this.props.dispatch)
  }

  componentDidMount() {
    this.actors.fetch_current_user()
    this.actors.fetch_ziltag_map(this.props.router.params.id)
  }

  render() {
    return (
      <BasePage
        {...this.props}
        {...this.actors}
      >
        <ZiltagMapLoginForm/>
        <ZiltagMapSignUpForm/>
      </BasePage>
    )
  }
}

export default connect(state => state)(ZiltagMapPage)
