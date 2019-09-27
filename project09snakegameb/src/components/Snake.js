import React from 'react';

export default (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                    border: "1px solid #FFF"
                }

                return (
                    <div className="snake-dot" key={i} style={style}></div>
                )
            })}
        </div>
    )
}