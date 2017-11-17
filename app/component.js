'use strict';

//Greeter,js
import React, {Component} from 'react'
import config from './config.json';

import styles from './component.css'

class Greeter extends Component{
    render() {
        return (
            <div>
                {/*添加类名*/}
                <div className={styles.root}>
                    {config.greetText}
                </div>
    </div>
    );
    }
}

export default Greeter