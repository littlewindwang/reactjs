'use strict';

//Greeter,js
import React, {Component} from 'react'
import Link from './Link'
import Name from './Name'

class Website extends Component {
    render(){
        return (
            <div>
                <Name name={this.props.name} />
                <Link site={this.props.site} />
            </div>
        )
    }
}

export default Website