import React from 'react'
import PropTypes from 'prop-types';
export default function TodoHeader(props) {
    return (
        <>
            <h1>
                {props.children}
            </h1>
            <h3>
                {props.desc}
            </h3>
        </>
    )
}

TodoHeader.propTypes={
    desc:PropTypes.string
}

TodoHeader.defaultProps={
    desc:'明日复明日，明日何其多'
}