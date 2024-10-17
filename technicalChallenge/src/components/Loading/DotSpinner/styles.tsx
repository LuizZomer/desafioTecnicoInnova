import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const DotSpinner = styled.div`
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #183153;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
`;

export const DotSpinnerDot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  &:before {
    content: "";
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: ${pulse} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }

  &:nth-child(2) {
    transform: rotate(45deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.875);
    }
  }

  &:nth-child(3) {
    transform: rotate(90deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.75);
    }
  }

  &:nth-child(4) {
    transform: rotate(135deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.625);
    }
  }

  &:nth-child(5) {
    transform: rotate(180deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.5);
    }
  }

  &:nth-child(6) {
    transform: rotate(225deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.375);
    }
  }

  &:nth-child(7) {
    transform: rotate(270deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.25);
    }
  }

  &:nth-child(8) {
    transform: rotate(315deg);

    &:before {
      animation-delay: calc(var(--uib-speed) * -0.125);
    }
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  min-height: 20vh;
`;
