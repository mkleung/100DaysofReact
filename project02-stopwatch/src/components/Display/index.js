import React from 'react'
class Display extends React.Component {
    render() {
        const sec = (this.props.sec < 10 ? "0" + this.props.sec : this.props.sec);
        const mil = (this.props.mil < 10 ? "0" + this.props.mil : this.props.mil);
        return (
            <div className="display">
                <h1 className="time">{sec}:{mil}</h1>
            </div>
        )
    }
}
export default Display;
