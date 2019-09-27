import React from 'react'
class Play extends React.Component {
    render() {
        const on = this.props.on ? <i className="fa fa-pause" /> : <i className="fa fa-play" />;
        return (
            <div className="play">
                <button className="btn playBtn" onClick={this.props.triggerTimer}>
                    {on}

                </button>
            </div>
        )
    }
}
export default Play;
