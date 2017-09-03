/* eslint camelcase: 0, no-underscore-dangle: 0 */
import React from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/auth'
// import moment from 'moment'
import Hydrangeas from '../../styles/img/Hydrangeas.jpg'
import Chrysanthemum from '../../styles/img/Chrysanthemum.jpg'
import Tulips from '../../styles/img/Tulips.jpg'
import preview from '../../styles/img/preview.jpg'
import classnames from 'classnames'
import Select from 'react-select'

@connect(
  state => state,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filesDisplay: false,
      adsGenerationBox: false,
      trackers: [true],
      adServerValue: [],
      selectedTab: 'info',
      previewImage: preview
    }

    this.onFileChange = this.onFileChange.bind(this)
    this.triggerInput = this.triggerInput.bind(this)
    this.generateAds = this.generateAds.bind(this)
    this.addMoreTracker = this.addMoreTracker.bind(this)
    this.removeTracker = this.removeTracker.bind(this)

    this.tabs = [
      {value: 'info', text: 'Info'},
      {value: 'metrics', text: 'Metrics'},
      {value: 'log', text: 'Log'}
    ]

    this.adsServerOptions = [
      {value: 'Basic', label: 'Basic'},
      {value: 'VPAID', label: 'VPAID'},
      {value: 'DFP', label: 'DFP'},
      {value: 'SDK', label: 'SDK'}
    ]
  }

  changeTab(tab) {
    this.setState({
      selectedTab: tab.value
    })
  }

  triggerInput(e) {
    this.fileInput.click()
  }

  onFileChange(event) {
    this.setState({
      filesDisplay: true
    })
  }

  generateAds() {
    this.setState({
      adsGenerationBox: true
    })
  }

  addMoreTracker() {
    let trackers = this.state.trackers

    console.log(trackers)
    trackers.push(true)

    this.setState({
      trackers
    })
  }

  removeTracker() {
    let trackers = this.state.trackers

    trackers.shift()

    this.setState({
      trackers
    })
  }

  render() {
    return (
      <section>
        <div className="container-fluid ">
          <div className="">
            <div className="col-lg-12 border-bottom1">
              <div className="row">
                <div className=" col-xs-12 col-md-6  col-lg-2 margin-top">
                  <h3 style={{display: 'inline-block'}}>Neon ID: </h3>
                  <h5 style={{display: 'inline-block'}} id="neonID" />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <form method="post">
                    <h3 style={{display: 'inline-block'}}>
                      Job No/Tracking No:{' '}
                      <input
                        className="label-textBox1 padding-left inline"
                        type="text"
                        disabled
                        placeholder="123456789"
                        id="jobno"
                      />{' '}
                    </h3>
                    <input type="hidden" />
                  </form>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="inline pull-left col-xs-12 col-md-6 margin-top">
              <div className="label-txt">
                CAMPAIGN
                <span id="editCampaign" className="edit pull-right">
                  <span className="glyphicon glyphicon-pencil" />
                </span>
              </div>
              <div>
                <input
                  className="label-textBox"
                  type="text"
                  id="campaign"
                  disabled
                />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-xs-12 margin-top">
            <ul className="nav nav-pills">
              {this.tabs.map((element, key) => {
                return (
                  <li
                    className={
                      this.state.selectedTab == element.value ? 'active' : ''
                    }
                    key={key}
                  >
                    <a
                      data-toggle="tab"
                      onClick={this.changeTab.bind(this, element)}
                    >
                      {element.text}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="prod-detail-unit">
              <div className="tab-content">
                <div
                  id="info"
                  className={
                    'tab-pane col-xs-12 ' +
                    (this.state.selectedTab == 'info' ? 'active' : 'hidden')
                  }
                >
                  <div className="row">
                    <div className="inline col-xs-12 col-md-6 margin-top pad">
                      <div className="label-txt margin-top">Product</div>
                      <div className="row">
                        <div className="col-xs-12 col-md-6">
                          <div className="">
                            <div className="label-textBox">
                              <select id="productType" disabled>
                                <option value="expandables">Expandables</option>
                                <option value="slidingBillboard">
                                  Sliding Billboard
                                </option>
                                <option value="footerPencil">
                                  Footer Pencil
                                </option>
                                <option value="siteTakeover">
                                  Site Takeover
                                </option>
                                <option value="interstitial">
                                  Interstitial
                                </option>
                                <option value="pushdown">Pushdown</option>
                                <option value="billboard">Billboard</option>
                                <option value="filmstrip">Filmstrip</option>
                                <option value="gravityVideoSkin">
                                  Gravity/Video Skin
                                </option>
                                <option value="interactiveTakeover">
                                  Interactive Takeover
                                </option>
                                <option value="videoTakeover">
                                  Video Takeover
                                </option>
                                <option value="heroFlip">Hero Flip</option>
                                <option value="degreeVideo">
                                  360 degree video
                                </option>
                                <option value="carousel">Carousel</option>
                                <option value="wallpaperPageSkin">
                                  Wallpaper/Page Skin
                                </option>
                                <option value="videoPreRolls">
                                  Video pre-rolls
                                </option>
                                <option value="videoCompanionAds">
                                  Video Companion Ads
                                </option>
                                <option value="inBannerVideo">
                                  In Banner Video
                                </option>
                                <option value="phoneAppInterstitial">
                                  Phone App Interstitial
                                </option>
                                <option value="tabletAppInterstitial">
                                  Tablet App Interstitial
                                </option>
                                <option value="mobileSlider">
                                  Mobile Slider
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6 " />
                      </div>
                      <span id="filesDisplay1">
                        <div className="label-txt margin-bottom">Files</div>
                        <div className="col-xs-2 col-md-1 margin-bottom">
                          <div className="row preview-container">
                            <img
                              onClick={() =>
                                this.setState({
                                  previewImage: Hydrangeas
                                })}
                              src={Hydrangeas}
                              className="img-responsive img-thumbnail"
                            />
                          </div>
                        </div>
                        <div className="col-xs-10 col-md-5">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="demopic1.png"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 text-center">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="320x250"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 text-center">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="61Kb"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 ">
                          <div>
                            <input
                              className="label-textBox imgtext"
                              type="file"
                              id="browse"
                              name="fileupload"
                              style={{display: 'none'}}
                            />
                            <span
                              className="glyphicon glyphicon-paperclip inline "
                              id="fakeBrowse"
                            />
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-xs-2 col-md-1 margin-bottom">
                          <div className="row preview-container">
                            <img
                              onClick={() =>
                                this.setState({
                                  previewImage: Chrysanthemum
                                })}
                              src={Chrysanthemum}
                              className="img-responsive img-thumbnail"
                            />
                          </div>
                        </div>
                        <div className="col-xs-10 col-md-5">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="demopic1.png"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 text-center">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="320x250"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 text-center">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="61Kb"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 ">
                          <div>
                            <input
                              className="label-textBox imgtext"
                              type="file"
                              id="browse"
                              name="fileupload"
                              style={{display: 'none'}}
                            />
                            <span
                              className="glyphicon glyphicon-paperclip inline "
                              id="fakeBrowse"
                            />
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="col-xs-2 col-md-1 margin-bottom">
                          <div className="row preview-container">
                            <img
                              onClick={() =>
                                this.setState({
                                  previewImage: Tulips
                                })}
                              src={Tulips}
                              className="img-responsive img-thumbnail"
                            />
                          </div>
                        </div>
                        <div className="col-xs-10 col-md-5">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="demopic1.png"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 text-center">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="320x250"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 text-center">
                          <input
                            className="label-textBox imgtext"
                            disabled
                            type="text"
                            value="61Kb"
                          />
                        </div>
                        <div className="col-xs-4 col-md-2 ">
                          <div>
                            <input
                              className="label-textBox imgtext"
                              type="file"
                              id="browse"
                              name="fileupload"
                              style={{display: 'none'}}
                            />
                            <span
                              className="glyphicon glyphicon-paperclip inline "
                              id="fakeBrowse"
                            />
                          </div>
                        </div>
                      </span>
                      <div className="clearfix" />
                      <div className="row margin-top" id="rmChoice">
                        <div className="inline pull-left  col-xs-6 col-md-4">
                          <div className="label-txt">Ad Server of choice</div>
                          <div style={{padding: '10px 0'}}>
                            <Select
                              multi={true}
                              name="form-field-name"
                              value={this.state.adServerValue}
                              options={this.adsServerOptions}
                              onChange={value => {
                                console.log(value)
                                this.setState({
                                  adServerValue: value
                                })
                              }}
                            />
                          </div>
                        </div>
                        <div className="inline pull-left  col-xs-6 col-md-4">
                          <div className="label-txt">iFrame buster</div>
                          <div className="label-textBox">
                            <select id="iFramebuster" name="iFramebuster">
                              <option value="Default">Default</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </div>
                        <div className="inline pull-left  col-xs-6 col-md-4 clearfix">
                          <div className="label-txt display-none">
                            Ad Server of choice
                          </div>
                          <div className="checkbox checkbox-inline label-txt">
                            <input id="useHTTPS" type="checkbox" />
                            <label htmlFor="https">Use HTTPs</label>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="row hidden" id="vdChoice">
                        <div className="col-lg-12 margin-bottom">
                          <div className="row">
                            <div className="inline pull-left col-xs-5 col-md-5">
                              <div className="label-txt">Aspect Ratio</div>
                              <div>
                                <select
                                  className="label-textBox full-width"
                                  disabled
                                  id="aspectRatio"
                                  multiple="multiple"
                                >
                                  <option value="sixteen9">16:9</option>
                                  <option value="four3">4:3</option>
                                </select>
                              </div>
                            </div>
                            <div className="inline pull-left col-xs-7 col-md-7">
                              <div className="label-txt">Resolution</div>
                              <div>
                                <select
                                  className="label-textBox full-width"
                                  disabled
                                  id="resolution"
                                  multiple="multiple"
                                >
                                  <optgroup label="16:9" id="six9">
                                    <option value="1">1920 x 1080 (HD)</option>
                                    <option value="2">1280 x 720 (HD)</option>
                                    <option value="3">854 x 480</option>
                                    <option value="4">640 x 360</option>
                                    <option value="5">504 x 284</option>
                                    <option value="6">480 x 270</option>
                                    <option value="7">426 x 240</option>
                                  </optgroup>
                                  <optgroup label="4:3" id="four3">
                                    <option value="9">1920 x 1440</option>
                                    <option value="10">1280 x 960</option>
                                    <option value="11">640 x 480 (SD)</option>
                                    <option value="12">480 x 360</option>
                                    <option value="13">400 x 300</option>
                                  </optgroup>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row hidden">
                          <div className="col-lg-12 margin-bottom">
                            <div className="inline pull-left col-xs-6 col-md-4">
                              <div className="label-txt">Bitrates</div>
                              <div>
                                <select
                                  className="label-textBox full-width"
                                  disabled
                                  id="bitrates"
                                  multiple="multiple"
                                >
                                  <option value="1">Very Low</option>
                                  <option value="2">Low</option>
                                  <option value="3">Medium</option>
                                  <option value="4">High</option>
                                  <option value="5">Very High</option>
                                </select>
                              </div>
                            </div>
                            <div className="inline pull-left col-xs-6 col-md-4">
                              <div className="label-txt">VAST Version</div>
                              <div>
                                <select
                                  className="label-textBox full-width"
                                  id="vastVersion"
                                  disabled
                                >
                                  <option value="1">3.0 and below</option>
                                  <option value="2">2.0 and below</option>
                                </select>
                              </div>
                            </div>
                            <div className="inline pull-left col-xs-6 col-md-4">
                              <div className="label-txt">Scalability</div>
                              <div>
                                <select
                                  className="label-textBox full-width"
                                  id="scalability"
                                  disabled
                                >
                                  <option value="1">Yes</option>
                                  <option value="2">No</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="row margin-bottom margin-top">
                        <div className="col-xs-12">
                          <button
                            className="btn btn-neon-blue"
                            id="adtag-btn"
                            onClick={this.generateAds}
                          >
                            Save & Generate Ad Tag
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <div
                            id="adtag-box"
                            className={classnames({
                              hidden: !this.state.adsGenerationBox
                            })}
                          >
                            <textarea id="gentdAdtag" />
                            <button className="btn btn-common">
                              <span className="glyphicon glyphicon-copy" /> Copy
                            </button>
                            {' '}
                            <button className="btn btn-common">
                              <span className="glyphicon glyphicon-remove" />{' '}
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline col-xs-12 col-md-6 margin-top">
                      <div className="label-txt margin-bottom">Preview</div>
                      <div className="preview">
                        <img id="fullviewpic" src={this.state.previewImage} />
                        <iframe id="adpreview" src="" />
                      </div>
                      <div className="clearfix" />
                      <div className="col-xs-12" id="imp-url-container">
                        <div className="" id="imp-url-unit0">
                          {this.state.trackers.map((ele, key) => {
                            return (
                              <div className="row" key={key}>
                                <div className="inline col-xs-3">
                                  <div className="row">
                                    <div className="label-textBox">
                                      <select id="eventSelect">
                                        <option value="impression">
                                          Impression Tracker
                                        </option>
                                        <option value="start">Start</option>
                                        <option value="play">Play</option>
                                        <option value="pause">Pause</option>
                                        <option value="mute">Mute</option>
                                        <option value="muteOff">
                                          Mute Off
                                        </option>
                                        <option value="expand">Expand</option>
                                        <option value="contract">
                                          Contract
                                        </option>
                                        <option value="replays">Replays</option>
                                        <option value="close">Close</option>
                                        <option value="skips">Skips</option>
                                        <option value="played25">
                                          Played 25%
                                        </option>
                                        <option value="played50">
                                          Played 50%
                                        </option>
                                        <option value="played75">
                                          Played 75%
                                        </option>
                                        <option value="played100">
                                          Played 100%
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-9">
                                  <input
                                    className="label-textBox2"
                                    type="text"
                                    placeholder="Enter tracking URL here"
                                  />
                                  <a className="magin-left pull-right">
                                    {key + 1 != this.state.trackers.length
                                      ? <span
                                          onClick={this.removeTracker}
                                          className="glyphicon glyphicon-minus"
                                        />
                                      : <span
                                          onClick={this.addMoreTracker}
                                          className="glyphicon glyphicon-plus"
                                        />}
                                  </a>
                                </div>
                                <div className="clearfix" />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="inline pull-left col-xs-12 clearfix">
                        <div className="row">
                          <div>
                            <input
                              id="CTRURL"
                              disabled
                              className="label-textBox"
                              type="text"
                              placeholder="Enter Click-through URL here"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="metrics"
                  className={
                    'tab-pane ' +
                    (this.state.selectedTab == 'metrics' ? ' active' : 'hidden')
                  }
                >
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top">
                    <div className="pull-right">
                      <a
                        href="#"
                        className="margin-top filter-btn"
                        id="filter-metrics-btn"
                      >
                        <span className="glyphicon glyphicon-filter" />
                      </a>
                      <div className="pull-right margin-top padding-left">
                        <a href="#">
                          <img src="img/xl.png" alt="xl" />
                        </a>
                      </div>
                      <form method="post">
                        <div
                          className="filter-dropdown row"
                          id="filter-dropdown"
                        >
                          <div className="label-txt">Campaign</div>
                          <div>
                            <input type="text" className="label-textBox" />
                          </div>
                          <div className="label-txt bordrt-bootm1">Filters</div>
                          <div className="matrix-border1">
                            <div className="label-textBox">
                              <select id="Device" name="Device">
                                <option value="-1">Device</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Desktop">Desktop</option>
                                <option value="phone">Phone</option>
                                <option value="Tablet">Tablet</option>
                              </select>
                            </div>
                            <div className="label-textBox">
                              <select name="OS">
                                <option value="-1">OS</option>
                                <option value="Desktop">Android</option>
                                <option value="phone">IOS</option>
                                <option value="Tablet">Other</option>
                                <option value="Any">Any</option>
                              </select>
                            </div>
                            <div className="label-textBox">
                              <select name="Orientation">
                                <option value="-1">Orientation</option>
                                <option value="Desktop">Landscape</option>
                                <option value="phone">Portrait</option>
                                <option value="Any">Any</option>
                              </select>
                            </div>
                            <div className="label-textBox">
                              <select name="days">
                                <option value="-1">Duration</option>
                                <option value="thisweek">This week</option>
                                <option value="7">7 days</option>
                                <option value="30">30 days</option>
                                <option value="60">60 days</option>
                                <option value="90">90 days</option>
                              </select>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="col-xs-12">
                            <div className="row">
                              <div className="form-group has-feedback">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="From date"
                                  id="fromdate"
                                />
                                <i className="glyphicon glyphicon-calendar form-control-feedback" />
                              </div>
                              <div className="form-group has-feedback">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="To date"
                                  id="todate"
                                />
                                <i className="glyphicon glyphicon-calendar form-control-feedback" />
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-neon-magenta"
                              style={{marginTop: '10px'}}
                            >
                              APPLY
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="row matrix-border">
                    <div className="clearfix" />
                    <div className="">
                      <div className="">
                        <div className="box-count">
                          <div className="col-xs-5 col-sm-4 col-md-2 col-lg-2 metrics-det  margin-top">
                            <div className="met-nme1">Total Impressions</div>
                            <div className="met-count">834,534</div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="col-xs-5 col-sm-4 col-md-2 col-lg-2 metrics-det margin-top">
                          <div className="met-nme">Total Clicks</div>
                          <div className="met-count">534</div>
                        </div>
                      </div>
                      <div className="">
                        <div className="col-xs-5 col-sm-4 col-md-2 col-lg-2 metrics-det margin-top">
                          <div className="met-nme1">Click Through Rate</div>
                          <div className="met-count">0.46%</div>
                        </div>
                      </div>
                      <div className="">
                        <div className="col-xs-5 col-sm-4 col-md-2 col-lg-2 metrics-det margin-top">
                          <div className="met-nme">Interaction Rate</div>
                          <div className="met-count">5.82%</div>
                        </div>
                      </div>
                      <div className="">
                        <div className="col-xs-5 col-sm-4 col-md-2 col-lg-2 metrics-det margin-top">
                          <div className="met-nme1">Dwell Rate</div>
                          <div className="met-count">7.08%</div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix margin-top" />
                    <div className="margin-top text-center">
                      <div className="">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="label-txt">Live Ads last 90 Dys</div>
                          <div>
                            <img src="img/chart1.png" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div className="label-txt">
                            Total Daily impression last 90 Dys
                          </div>
                          <div>
                            <img src="img/chart2.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix margin-top" />
                    <div className="margin-top text-center">
                      <div className="">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                          <div className="label-txt">Impressions By Device</div>
                          <div>
                            <img src="img/chart3.png" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                          <div className="label-txt">Impressions By OS</div>
                          <div>
                            <img src="img/chart4.png" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                          <div className="label-txt">
                            Impressions By Orientation
                          </div>
                          <div>
                            <img src="img/chart5.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              <div
                id="log"
                className={
                  'tab-pane ' +
                  (this.state.selectedTab == 'log' ? 'active' : 'hidden')
                }
              />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </section>
    )
  }
}
