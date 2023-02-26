import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Buttons =  ({onClick, options})  =>{
    return (
      <Wrapper>
        {options.map(option => (
          <FeedbackBtnsItem key={option}>
            <button onClick={() => onClick(option)} value={option}>
              {capitalize(option)}
            </button>
          </FeedbackBtnsItem>
        ))}
      </Wrapper>
    );
  }
console.log(Buttons)

const Wrapper = styled.ul`
  display: flex;
`;

const FeedbackBtnsItem = styled.li`
  margin-right: 10px;
`;

Buttons.propTypes = {
  onClick: PropTypes.func,
};

export default Buttons;