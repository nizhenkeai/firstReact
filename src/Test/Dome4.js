/**
 * Created by m on 2018/7/12.
 */
import React from 'react';

let NumberList = props => {
    const data = props.data;
    const listItems = data.map((item) =>
        <li key={item.a}>{item.a}</li>
    );
    return (
        <ul>{listItems}</ul>
    )
};

class Dome4 extends React.Component {

    render() {
        const state = [{'a': 1}, {'a': 2}, {'a': 3}];

        return (
            <NumberList data={state}/>
        );
    }
}

export default Dome4
