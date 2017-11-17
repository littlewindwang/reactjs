// 'use strict'
//https://github.com/wangning0/webpack_react
// // main.js
import React from 'react';
import {render} from 'react-dom';
import Website from './Website';
import LikeButton from './LikeButton'


// import Greeter from './component';
// import './testscss.scss';//使用require导入css文件
//
// render(<Greeter />, document.getElementById('root'));


render(
<LikeButton />,
    document.getElementById('root')
);