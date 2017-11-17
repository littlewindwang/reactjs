import React, {Component} from 'react'

class LikeButton extends Component {
    constructor(props){
        super(props),
            this.state={liked:false}
    }

    // getInitialState() {
    //     return {liked: false};
    // }


    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }
    render() {
        var text = this.state.liked?'like':'dislike';
        return (
            <p onClick={this.handleClick.bind(this)}>
                yo{this.props.name}u <span>{text}</span> me
            </p>
        );
    }
}

export default LikeButton