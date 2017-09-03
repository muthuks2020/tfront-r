import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import * as actionCreators from '../../actions/auth'
import {removeIpl} from '../../utils/misc'
import AuthService from '../Misc/AuthService'
import classnames from 'classnames'

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

class MultiSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selected: [],
      disabled: false,
      disabledTitle: 'Disabled',
      setDisabled: false,
      buttonClass: '',
      buttonWidth: null,
      buttonTitle: null,
      includeSelectAllOption: true,
      numberDisplayed: 2,
      delimiterText: ';',
      ...this.props
    }

    this.data = [
      {value: 1, text: 'Nguyen'},
      {value: 2, text: 'Thanh'},
      {value: 3, text: 'Nguyen Ba Thanh'}
    ]
    this.select = this.select.bind(this)
  }

  isSelected(object) {
    return this.state.selected.find(ele => ele == object)
  }

  toggleOpen() {
    if (!this.state.setDisabled) {
      this.setState({
        open: !this.state.open
      })
    }
  }

  select(object) {
    if (this.state.onDropdownShow) {
      this.state.onDropdownShow()
    }
    let selected = this.state.selected

    const found = this.state.selected.find(ele => ele == object)

    if (!found) {
      selected.push(object)
    } else {
      selected = selected.filter(ele => ele != found)
    }

    this.setState({
      selected
    })
  }

  selectAll() {
    let newState = this.data

    if (this.state.selected.length == this.data.length) {
      newState = []
    }

    this.setState({
      selected: newState
    })
  }

  title() {
    if (this.state.buttonTitle) {
      return this.state.buttonTitle
    }

    if (!this.state.selected.length) {
      if (this.state.setDisabled && this.state.disabledTitle) {
        return this.state.disabledTitle
      }
      return 'None selected'
    }

    if (this.state.selected.length > this.state.numberDisplayed) {
      return this.state.numberDisplayed.toString() + ' selected'
    }

    let title = []
    this.state.selected.map(ele => {
      title.push(ele.text)
    })

    return title.join(
      `, ${this.state.delimiterText ? this.state.delimiterText : ','} `
    )
  }

  isSelectedAll() {
    return this.state.selected.length == this.data.length
  }

  render() {
    return (
      <div className={classnames('btn-group', {open: this.state.open})}>
        <button
          onClick={this.toggleOpen.bind(this)}
          type="button"
          disabled={this.state.setDisabled}
          className={
            this.state.buttonClass
              ? this.state.buttonClass
              : 'multiselect dropdown-toggle btn btn-default'
          }
          data-toggle="dropdown"
          title="None selected"
          aria-expanded="false"
        >
          <span className="multiselect-selected-text">{this.title()}</span>{' '}
          <b className="caret" />
        </button>
        <ul className="multiselect-container dropdown-menu">
          {this.state.includeSelectAllOption &&
            <li className={this.isSelectedAll() ? 'active' : ''}>
              <a>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={this.isSelectedAll()}
                    value=""
                    onClick={this.selectAll.bind(this)}
                  />Select All
                </label>
              </a>
            </li>}
          {this.data.map((ele, key) => {
            return (
              <li key={key} className={this.isSelected(ele) ? 'active' : ''}>
                <a tabIndex={key}>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value={ele.value}
                      onClick={this.select.bind(this, ele)}
                    />{' '}
                    {ele.text}{' '}
                  </label>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@AuthService
export default class NotAuthenticatedComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    this.props.checkAuth().then(user => {
      if (user && this.props.location.pathname == '/login') {
        this.props.saveUser(user)
        browserHistory.push('/home')
      }

      removeIpl()
    })
  }

  render() {
    return (
      <div>
        {this.props.children}
        {/* <MultiSelect setDisabled={false} /> */}
      </div>
    )
  }
}
