import React from 'react';
import './RefreshAdvice.css';

function RefreshAdvice(props) {
    return (
        <button className="advice-button" onClick={props.onClick}>
            Teach me Senpai
        </button>
    );
}

export default RefreshAdvice;