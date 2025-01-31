import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(8px);
    transform: scale(1.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    @media (min-width: 768px) {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: relative;
    }
`;

const Background = ({ image, children }) => (
    <BackgroundDiv image={image}>
        {children}
    </BackgroundDiv>
);

Background.defaultProps = {
    image    : 'https://source.unsplash.com/random/1920x1080',
    children : null,
};

Background.propTypes = {
    image    : PropTypes.string,
    children : PropTypes.node,
};
export default Background;
