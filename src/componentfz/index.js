import React, { Component } from 'react'

import './style.css'

class Index extends Component {

    state= {
        x:0,y:0
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.mouseMove)
    }
    // 鼠标移动执行的回调函数
    mouseMove=(e)=>{
        this.setState({
            x:e.x,
            y:e.y
        })
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.mouseMove)
    }

    render() {
        return (
            <div>
                <h2 className="qie">企鹅所在位置: x--{this.state.x},y--{this.state.y}</h2>
            </div>
        )
    }
}

export default Index