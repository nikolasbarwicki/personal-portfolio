import React, { useState } from "react"
import styled from "styled-components"

const ToggleWrapper = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 3rem;
  position: relative;
  width: 3rem;
  z-index: 9999;

  /* svg animations */

  @keyframes rotate_in_cw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes rotate_out_cw {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate_in_ccw {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
  @keyframes rotate_out_ccw {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes draw_in {
    50% {
      stroke-dashoffset: 100%;
    }
    100% {
      stroke-dashoffset: 0%;
    }
  }

  @keyframes draw_out {
    50% {
      stroke-dashoffset: 0%;
    }
    100% {
      stroke-dashoffset: 100%;
    }
  }

  .svg-1 {
    animation: ${props => (props.menuOpened ? `rotate_in_cw` : `rotate_out_cw`)}
      0.5s;
    animation-fill-mode: forwards;

    .line-1 {
      animation: ${props => (props.menuOpened ? `draw_out` : `draw_in`)} 0.5s;
      animation-fill-mode: forwards;
    }
    .line-3 {
      animation: ${props => (props.menuOpened ? `draw_out` : `draw_in`)} 0.5s;
      animation-fill-mode: forwards;
    }
  }

  .svg-2 {
    animation: ${props =>
        props.menuOpened ? `rotate_in_ccw` : `rotate_out_ccw`}
      0.5s;
    animation-fill-mode: forwards;
  }

  /* default line offsets */

  .svg-1 {
    .line-1,
    .line-3 {
      stroke-dashoffset: ${props => (props.menuOpened ? `0%` : `100%`)};
    }
  }

  svg {
    height: 100%;
    overflow: visible;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;

    path {
      stroke: ${props => props.theme.colors.darkBlue};
      stroke-dasharray: 100%;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      stroke-width: 20px;
    }
  }
`

const MenuToggle = ({ onClick, menuOpened }) => {
  return (
    <ToggleWrapper onClick={onClick} menuOpened={menuOpened}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="svg-1"
      >
        <path class="line-1" d="M9 53.8h237.66" />
        <path class="line-2" d="M9 129.25h237.66" />
        <path class="line-3" d="M9 204.7h237.66" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="svg-2"
      >
        <path class="cls-1" d="M9 129.25h237.66" />
      </svg>
    </ToggleWrapper>
  )
}

export default MenuToggle
