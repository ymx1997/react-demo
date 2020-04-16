import React, { Component } from 'react'



// 1. 挂载阶段
// constructor() => render() => componentDidMount()
// 2. 更新阶段
// setState() * forceUpdate() * 接收到新的props
// render() => componentDidUpdate

class Chi extends Component {

    componentWillMount() {
        console.log('组件销毁了');
    }

    render() {
        return (
            <div>
                <h2>子组件</h2>
            </div>
        )
    }
}



class Index extends Component {
    constructor() {
        super();
        console.log('1.执行constructor()');
        this.state = {
            count: 0,
            isShow: true
        }
        /**
         * 1.初始化state数据
         * 2.事件处理程序绑定this
         */
    }

    componentDidMount() {
        console.log('3. 执行componentDidMount()');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('组件更新了！', prevProps, prevState);
    }
 
    // 点击加1
    add = () => {
        this.setState({
            count: this.state.count + 1,
            isShow:!this.state.isShow
        })
    }


    render() {
        console.log('2.执行render()');
        return (
            <div>
                <h1>生命周期</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.add}>更新组件</button>
                {
                    this.state.isShow ? <Chi /> : null
                }
            </div>
        )
    }
}

export default Index