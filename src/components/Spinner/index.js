import React from 'react'
// const defaultSize = 55;
export const Material = props =>
  <div className="loader" style={props.size && {width: props.size + 'px'}}>
    <svg className="circular" viewBox="25 25 50 50">
      <circle
        className="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  </div>

export const Ins = props => <div className="ins-spinner" />
