/* eslint camelcase: 0, no-underscore-dangle: 0 */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/auth'
import {browserHistory} from 'react-router'
// import moment from 'moment'
// import {getRandomInt} from '../../utils/misc'
// import classnames from 'classnames'
import DateTimeField from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

@connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: false,
      showProduct: false,
      showStatus: false,
      startDate: null,
      endDate: null
    }
    this.showFilter = this.showFilter.bind(this)
  }

  showFilter() {
    this.setState({
      filter: !this.state.filter
    })
  }

  render() {
    return (
      <section>
        <div className="container-fluid margin-top ">
          <div className="row clearfix">
            <div className="col-xs-7 col-md-9 col-lg-9 margin-top">
              <input
                type="text"
                id="myInput"
                className="input-placeholder"
                placeholder="Search with Product, Job no., Neon ID.."
              />
            </div>
            <div className="col-xs-5 col-md-3 col-lg-3">
              <a
                href="#"
                onClick={this.showFilter}
                className="pull-right filter-btn"
                id="filter-btn"
              >
                <span className="glyphicon glyphicon-filter" />
              </a>
              <form method="post">
                <div
                  className="filter-dropdown"
                  style={{display: this.state.filter ? 'block' : 'none'}}
                  id="filter-index-dropdown"
                >
                  <div className="col-xs-6">
                    <div className="row">
                      <label className="label-txt">Date Type</label>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="row">
                      <select>
                        <option>Start</option>
                        <option>End</option>
                      </select>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="form-group has-feedback">
                        <DateTimeField
                          selected={this.state.startDate}
                          onChange={date => {
                            this.setState({
                              startDate: date
                            })
                          }}
                        />
                      </div>
                      <div className="form-group has-feedback">
                        <DateTimeField
                          selected={this.state.endDate}
                          onChange={date => {
                            this.setState({
                              endDate: date
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="row">
                      <label
                        className="label-txt label-txt3"
                        onClick={() => {
                          this.setState({
                            showProduct: !this.state.showProduct
                          })
                        }}
                        id="product"
                      >
                        Product<span
                          className={`glyphicon pull-right ${this.state
                            .showProduct
                            ? 'glyphicon-menu-down'
                            : 'glyphicon-menu-right'}`}
                          style={{fontSize: '1.2em', marginTop: '6px'}}
                        />
                      </label>
                    </div>
                  </div>
                  <div
                    className="col-xs-12"
                    id="productlist"
                    style={{
                      display: this.state.showProduct ? 'block' : 'none'
                    }}
                  >
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="one" />One
                      </label>
                    </div>
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="two" />Two
                      </label>
                    </div>
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="three" /> Three
                      </label>
                    </div>
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="four" />Four
                      </label>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-xs-12">
                    <div className="row">
                      <label
                        className="label-txt label-txt3"
                        onClick={() => {
                          this.setState({
                            showStatus: !this.state.showStatus
                          })
                        }}
                        id="status"
                      >
                        Status<span
                          className={`glyphicon pull-right ${this.state
                            .showStatus
                            ? 'glyphicon-menu-down'
                            : 'glyphicon-menu-right'}`}
                          style={{fontSize: '1.2em', marginTop: '6px'}}
                        />
                      </label>
                    </div>
                  </div>
                  <div
                    className="col-xs-12"
                    id="statuslist"
                    style={{
                      display: this.state.showStatus ? 'block' : 'none'
                    }}
                  >
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="one" />One
                      </label>
                    </div>
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="two" />Two
                      </label>
                    </div>
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="three" />Three
                      </label>
                    </div>
                    <div>
                      <label className="checkbox-inline">
                        <input type="checkbox" value="four" />Four
                      </label>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <button
                    type="submit"
                    className="btn btn-common hidden"
                    style={{marginTop: '10px'}}
                  >
                    APPLY
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="clearfix" />
          <div className="row">
            <div className="table-responsive col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table ">
                <thead className="table-header text ">
                  <tr>
                    <th
                      className="table-header1 col-xs-2 col-md-2 col-lg-2 border-right"
                      colSpan="2"
                    />
                    <th>Campaign</th>
                    <th>Product</th>
                    <th>Total impressions</th>
                    <th>CTR</th>
                    <th />
                  </tr>
                </thead>
                <tbody className=" text ">
                  <tr className="border-bottom1">
                    <td
                      className="padding-top padding-bottom border-right"
                      colSpan="2"
                    >
                      <div className=" pull-left prod-details ">
                        <div className="display-inline dropdown dropbtn">
                          <span className="glyphicon glyphicon-option-vertical" />
                          <div
                            className="dropdown-content"
                            style={{fontSize: '0.6em', marginTop: '6px'}}
                          >
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#editForm"
                            >
                              Edit
                            </a>
                            <a href="#">Copy line item</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                        <div className="display-inline text ">READY</div>
                        <div className="display-inline text padding-left">
                          AWS5288245
                        </div>
                      </div>
                      <div className=" clearfix padding-top pull-right">
                        <p className="status padding-top" title="status">
                          status
                        </p>
                      </div>
                    </td>
                    <td className="padding-top padding-bottom">LOREM IPSUM</td>
                    <td className="padding-top padding-bottom">LOREM IPSUM</td>
                    <td className="padding-top padding-bottom">LOREM IPSUM </td>
                    <td className="padding-top padding-bottom">LOREM IPSUM </td>
                    <td className="padding-top padding-bottom">
                      <button
                        className="details pull-right"
                        onClick={() => browserHistory.push('/details')}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="padding-top padding-bottom border-right"
                      colSpan="2"
                    >
                      <div className="text1">
                        START{' '}
                        <span className="padding-left">02-FEB-2017 18:33</span>
                      </div>
                      <div className="text1">
                        END{' '}
                        <span className="padding-left">02-FEB-2017 18:33</span>
                      </div>
                    </td>
                    <td
                      className="padding-top padding-bottom border-right"
                      colSpan="2"
                    >
                      <div className="text1">
                        Job/Tracking No:{' '}
                        <span className="padding-left">123456789</span>
                      </div>
                    </td>
                    <td className="padding-top padding-bottom" colSpan="3" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
