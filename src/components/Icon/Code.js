import React from 'react'
import PropTypes from 'prop-types'

const CodeIcon = ({ iconWidth, iconHeight }) => {
  return (
    <svg id="CodeIcon" xmlns="http://www.w3.org/2000/svg" width={iconWidth} height={iconHeight} viewBox="0 0 32 32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
    </svg>
  )
}

CodeIcon.propTypes = {
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number
}

CodeIcon.defaultProps = {
  iconWidth: 18,
  iconHeight: 18
}

export default CodeIcon
