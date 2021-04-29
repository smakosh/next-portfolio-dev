import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`;

type OverlayProps = {
  sidebar?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
