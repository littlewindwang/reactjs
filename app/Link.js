import React, {Component} from 'react'

class Link extends Component{
    render() {
        return (
            <a href={this.props.site}>{this.props.site}</a>
        )
    }
}

export default Link