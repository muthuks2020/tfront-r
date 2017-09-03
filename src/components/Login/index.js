/* eslint camelcase: 0, no-underscore-dangle: 0 */

import React from 'react'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/auth'
import {Material} from '../../components/Spinner'
import {reduxForm, Field} from 'redux-form'
import {fieldsRequired} from '../../utils/misc'
import {TextInput} from '../Misc/reduxBootstrap'
import Button from 'react-bootstrap/lib/Button'

@reduxForm({
  form: 'loginForm',
  fields: ['email', 'password'],
  touchOnChange: true, // react-widgets DateTimePicker doesn't blur
  validate(v) {
    const errors = fieldsRequired(v, ['email', 'password'])
    return errors
  }
})
@connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class LoginView extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(data) {
    this.props.loginUser(data.email, data.password)
  }

  render() {
    return (
      <div className="">
            <div className="container-fluid">
            <form
                  role="form"
                  onSubmit={this.props.handleSubmit(
                    this.handleSubmit.bind(this)
                  )}
                >
            <section>

              <div className="container-fluid margin-top ">
                <div className="row">
                  <div className="col-lg-12">
                     <div className="login-form">
                        <h2 style={{marginBottom: '30px'}}>Login</h2>
                        {this.props.auth.statusText &&
                  <div className="text-danger">
                    {this.props.auth.statusText}
                  </div>}
                        <div className="form-group">
                          <label>Username</label>
                          <Field
                            fullWidth={true}
                            name="email"
                            type="text"
                            component={TextInput}
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <Field
                            fullWidth={true}
                            name="password"
                            type="password"
                            component={TextInput}
                          />
                        </div>
                        <div className="margin-bottom">

                          <div>
                    {this.props.auth.isAuthenticating
                      ? <div className="center-xs">
                          <Material />
                        </div>
                      : <div>
                          <button type="submit" className="btn btn-neon-blue">Sign In</button>{' '}
                          <button type="button" className="btn btn-neon-magenta">Sign Up</button>
                        </div>}
                  </div>

                        </div>
                        <p>Forgot your password? <a href="#">Click here</a></p>
                     </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
          </section>
          </form>
          </div>


        <div className="VYMape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 810"
            preserveAspectRatio="xMinYMin slice"
          >
            <path
              fill="#efefee"
              d="M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"
            />
            <path
              fill="#f6f6f6"
              d="M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"
            />
            <path
              fill="#f7f7f7"
              d="M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"
            />
            <path
              fill="#fbfbfc"
              d="M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"
            />
            <path
              fill="#ebebec"
              d="M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"
            />
            <path
              fill="#e1e1e1"
              d="M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"
            />
            <path
              fill="#e7e7e7"
              d="M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"
            />
          </svg>
        </div>
      </div>
    )
  }
}
