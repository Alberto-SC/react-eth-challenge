import styled from 'styled-components';

export const container = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  z-index: -1;
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  transform: rotate(80deg);
  left: 20%;
`;

export const Wave = styled.div`
  position: absolute;
  opacity: 0.4;
  width: 1200px;
  height: 1000px;
  border-radius: 43%;
  ${({ One }) =>
    One &&
    `
              animation: rotate 7000ms infinite linear;
                opacity: 0.1;k
                background: rgba(149, 84, 255, 0.31);
    `}
  ${({ Two }) =>
    Two &&
    `
              animation: rotate 7000ms infinite linear;
                opacity: 0.1;
                background: rgba(149, 84, 255, 0.31);
    `}
        ${({ Tree }) =>
    Tree &&
    `
   	animation: rotate 7500ms infinite linear;
	background-color: rgba(149, 84, 255, 0.31);
    `}
`;

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	from {
		transform: rotate(360deg);
	}
}

#shape10,
#shape9,
#shape8,
#shape1 {
	transform-box: fill-box;
	transform-origin: center;
	-webkit-animation: rotate-center 2s cubic-bezier(0.445, 0.05, 0.55, 0.95)
		infinite alternate both;
	animation: rotate-center 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
		alternate both;
}

#cir1,
#cir2,
#cir3 {
	transform-box: fill-box;
	transform-origin: center;
	-webkit-animation: rotate-scale-down-diag-2 2s linear infinite both;
	animation: rotate-scale-down-diag-2 2s linear infinite both;
}

#cir4,
#cir5,
#cir6 {
	transform-box: fill-box;
	transform-origin: center;
	-webkit-animation: rotate-scale-down-diag-2 1s linear infinite both;
	animation: rotate-scale-down-diag-2 1s linear infinite both;
}

/**
   * ----------------------------------------
   * animation rotate-center
   * ----------------------------------------
   */
@-webkit-keyframes rotate-center {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes rotate-center {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

/**
   * ----------------------------------------
   * animation rotate-scale-down-diag-2
   * ----------------------------------------
   */
@-webkit-keyframes rotate-scale-down-diag-2 {
	0% {
		-webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
		transform: scale(1) rotate3d(-1, 1, 0, 0deg);
	}
	50% {
		-webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
		transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
	}
	100% {
		-webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
		transform: scale(1) rotate3d(-1, 1, 0, 360deg);
	}
}
@keyframes rotate-scale-down-diag-2 {
	0% {
		-webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
		transform: scale(1) rotate3d(-1, 1, 0, 0deg);
	}
	50% {
		-webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
		transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
	}
	100% {
		-webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
		transform: scale(1) rotate3d(-1, 1, 0, 360deg);
	}
}