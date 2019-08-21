import React from 'react'
class Delete extends React.Component {
    render() {
        return (

            <button className="deleteBtn" onClick={this.props.resetTimer}>
                <i className="fa fa-trash" />
            </button>

        )
    }
}
export default Delete;
