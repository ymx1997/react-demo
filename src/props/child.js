import React, { Component } from 'react'

const Fnc = (props)=>{
    console.log(props);
    // props.children()
    return (
        <div>
            <h2>函数子组件</h2>
            {
                props.children
            }
        </div>

    )
}


class Index extends Component {
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <hr />
                <Fnc>{<span>100</span>}</Fnc>
            </div>
        )
    }
}

export default Index;
