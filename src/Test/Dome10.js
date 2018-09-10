/**
 * Created by m on 2018/8/1.
 */
import React from 'react';
import './Dome8.css'

const Dome10 = props => {

    const state = {
        list: [{a: '你你你你'}, {a: '好好好好'}, {a: '呀呀呀呀'}]
    };


    const pClassName = [];
    if (state.list.length > 1) {
        pClassName.push('bg-red')
    }
    return (
        <div>
            {state.list.map((item, index) => {
                return <span className={`font-green ${pClassName.join('')}`} key={index}>{item.a}</span>
            })}
        </div>
    );


};

export default Dome10