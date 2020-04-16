import React, { Component } from 'react';

// 类子组件
class Child extends Component {
    constructor(props) {
        super(props);
        console.log('constructor', this.props);
    }

    state = {
        a: 10000
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <h3>我是类子组件</h3>
                <p>{this.props.b}</p>
                <button onClick={()=>{
                    this.props.fn(this.state.a, 20000)
                }}>调用父组件方法传递数据</button>
                <button onClick={this.props.c}>调用父组件传递的方法</button>
            </div>
        )
    }
}


// 函数子组件
const Fnc = ({ a, b, fn }) => {
    return (
        <div>
            <h2>函数子组件</h2>
            <p>{a}</p>
            <p>{b}</p>
            <button onClick={()=>{
                fn()
            }}>修改父类count值</button>
        </div>
    )
}

// 父组件
class Index extends Component {

    state = {
        count: 0,
        // 控制显示
        isShow:true
    }

    add = () => {
        this.setState({
            count: this.state.count + 1,
            isShow:!this.state.isShow
        })
    }

    // 父组件提供回调函数=》共子组件调用=》子组件调用的时候传递数据
    getChildData=(a,b)=>{
        console.log('接收到子组件的数据：',a,b);
    }

    render() {
        return (
            <div>
                <h1>父-类组件</h1>
                <p>{this.state.count}</p>
                <button onClick={this.add}>add</button>
                {
                    this.state.isShow?<h1>显示</h1>:null
                }
                <hr />
                <Fnc a={'hello son!'} b={this.state.count} fn={this.add} />
                <hr />
                <Child b={this.state.count} c={this.add} fn={this.getChildData} />
            </div>
        )
    }
}

export default Index;