import React from 'react'
import PropTypes from 'prop-types'

import styled, { keyframes} from 'styled-components'
import { color } from '../../theme'

const rotate360 = keyframes`
  from {
    transform-origin: center center;
    transform: rotate(0deg);
  }

  to {
    transform-origin: center center;
    transform: rotate(360deg);
  }
`

const Rotate = styled.g`
  animation: ${rotate360} 1.3333s linear infinite;
`

const LogoIcon = ({ iconWidth, iconHeight }) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox='0 0 297 247'
      xmlns="http://www.w3.org/2000/svg"
    >

      <Rotate
        transform='translate(-0.030762, -0.023926)'
        stroke='none'
        strokeWidth={1}
        fill='none'
        fillRule='evenodd'
      >

        <path
          d="M124.234.501C56.165.501.983 55.684.983 123.752c0 68.072 55.182 123.255 123.25 123.255 68.073 0 123.255-55.183 123.255-123.255C247.485 55.684 192.302.502 124.234.502zm.003 222.977c-55.078 0-99.725-44.655-99.725-99.726 0-55.07 44.647-99.722 99.725-99.722 55.078 0 99.719 44.651 99.719 99.722 0 55.071-44.644 99.726-99.719 99.726z"
          fill={color.secondary}
          fillRule="nonzero"
        />

        <circle
          fill={color.gray4}
          fillRule='nonzero'
          cx='125.043023'
          cy='123.145349'
          r='4.19302326'
        />

        <path
          d='M209.151 123.002c0 46.542-37.723 84.269-84.268 84.269-46.539 0-84.266-37.727-84.266-84.269 0-46.531 37.727-84.272 84.266-84.272 46.545 0 84.268 37.74 84.268 84.272z'
          stroke={color.gray8}
          strokeWidth='0.25'
        />

        <circle
          stroke={color.gray8}
          strokeWidth='0.25'
          cx='124.889535'
          cy='123.002326'
          r='86.3232558'
        />

        <circle
          stroke={color.gray8}
          strokeWidth='0.25'
          cx='124.886047'
          cy='123.002326'
          r='88.377907'
        />

        <circle
          stroke={color.gray8}
          strokeWidth='0.25'
          cx='124.886047'
          cy='123.002326'
          r='90.4325581'
        />

        <circle
          stroke={color.gray8}
          strokeWidth='0.25'
          cx='124.889535'
          cy='123.002326'
          r='92.4872093'
        />
      </Rotate>
        <path
          d='M290.308 40.119c-3.568-3.572-8.85-5.435-15.844-5.585.206-6.639-1.71-11.976-5.752-16.015-3.925-3.925-8.69-5.826-14.31-5.725-5.612.108-10.461 2.208-14.56 6.307l-18.119 18.126-.083-.087-89.017 89.02c-4.866 4.87-9.049 5.556-12.547 2.057-1.459-1.458-2.202-3.209-2.24-5.267-.035-2.055.656-3.788 2.062-5.198 1.465-1.461 3.212-2.194 5.264-2.225 2.044-.021 3.774.67 5.194 2.093 1.116 1.116 1.814 2.672 2.086 4.64l15.007-15.004c-1.514-1.748-2.672-3.025-3.475-3.816-5.05-5.055-11.298-7.563-18.725-7.514-7.434.045-13.71 2.63-18.827 7.747-5.285 5.289-7.898 11.613-7.82 18.97.076 7.364 2.821 13.74 8.235 19.155 2.725 2.72 5.965 4.786 9.747 6.178 3.781 1.391 7.514 1.922 11.208 1.58 6.411-.59 12.405-3.663 17.968-9.23L235.286 50.8l-.066-.07 14.961-14.965c1.424-1.42 2.666-2.24 3.757-2.512 1.21-.477 2.247-.313 3.088.527.82.817 1.102 1.685.844 2.6-.262.913-1.14 2.127-2.655 3.644l-21.14 21.136a123.327 123.327 0 0 1 8.52 18.496l25.736-25.737c1.42-1.424 2.669-2.25 3.76-2.509 1.211-.477 2.244-.32 3.081.517.813.802 1.081 1.667.799 2.553-.276.9-1.162 2.107-2.676 3.621l-28.44 28.44a122.382 122.382 0 0 1 4.493 22.867l38.867-38.87c4.947-4.94 7.633-9.793 8.048-14.533.575-6.053-1.413-11.348-5.955-15.886z'
          fill={color.primary}
          fillRule='nonzero'
        />
    </svg>
  )
}

LogoIcon.propTypes = {
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number
}

LogoIcon.defaultProps = {
  iconWidth: 100,
  iconHeight: 84
}

export default LogoIcon
