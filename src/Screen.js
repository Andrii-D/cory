import React, { Component } from 'react';
import styled from 'styled-components'

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
    {
        width: 100%;
        height: 100%;
        background: white;
    }
`;

const StyledIframe = styled.iframe`
    {
        width:100%;
        height:100%;
        border:none;
    }
`;

class Screen extends Component {
    render() {
        let scale = this.props.scale/100;
        let scaledWidth = (this.props.item.width * scale + 32) + 'px';
        let scaledHeight = (this.props.item.height * scale + 120) + 'px';
        return (
            <Smartphone width={scaledWidth} height={scaledHeight}>
                <SmartphoneContent>
                    <StyledIframe sandbox="allow-same-origin allow-forms allow-scripts" 
                            seamless="" 
                            src={this.props.src} 
                            title={this.props.item.device}>
                    </StyledIframe>
                </SmartphoneContent>
            </Smartphone>
        );
    }
}
Screen.defaultProps = {
    src: "http://example.com",
    item: {device: 'iPhone 7', os: 'iOS', width: 750, height: 1334}
}

export default Screen;