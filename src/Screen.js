import React from 'react';
import styled from 'styled-components';
import {string, number, shape} from 'prop-types';

const Smartphone = styled.div`
    position: relative;
    width: ${props => props.width || '360px'};
    height: ${props => props.height || '640px'};
    margin: auto;
    border: 16px black solid;
    border-top-width: 60px;
    border-bottom-width: 60px;
    border-radius: 36px;
    ::before {
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 10px;
    } 
    ::after {
        content: '';
        display: block;
        width: 35px;
        height: 35px;
        position: absolute;
        left: 50%;
        bottom: -65px;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 50%;
    }
`;

const SmartphoneContent = styled.div`
    width: 100%;
    height: 100%;
    background: white;
`;

const StyledIframe = styled.iframe`
    width:100%;
    height:100%;
    border:none;
    overflow: auto;
`;

const Screen = ({scale = 1, src, item}) => {
  const scaledWidth = item.width * scale / 100 + 32 + 'px';
  const scaledHeight = item.height * scale / 100 + 120 + 'px';
  return (
    <Smartphone width={scaledWidth} height={scaledHeight}>
      <SmartphoneContent>
        <StyledIframe
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless=""
          src={src}
          title={item.device}
        />
      </SmartphoneContent>
    </Smartphone>
  );
};

Screen.propTypes = {
  scale: number.isRequired,
  src: string.isRequired,
  item: shape({
    width: number.isRequired,
    height: number.isRequired,
    device: string.isRequired,
    os: string.isRequired,
  }),
};

export default Screen;
