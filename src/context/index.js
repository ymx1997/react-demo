import React, { Component } from 'react';

// 使用Context实现跨多级组件的通信步骤
const DataCom = React.createContext();

// 孙组件
class Child extends Component {
    render() {
        return (
            <div>
                <h3>类子组件</h3>
                <DataCom.Consumer>{(d)=><p>{'接收到的数据：'+d}</p>}</DataCom.Consumer>
            </div>
        )
    }
}

// 子组件
const Fnc = ()=>{
    return (
        <div>
            <h2>函数子组件</h2>
            <DataCom.Consumer>{(d)=><h3>{'接收到的数据：'+d}</h3>}</DataCom.Consumer>
            <hr />
            <Child />
        </div>
    )
}



// 祖先组件
class Index extends Component {
    render() {
        return (
            <DataCom.Provider value={10000}>
                <h1>App</h1>
                <hr/>
                <Fnc />
            </DataCom.Provider>
        )
    }
}

export default Index;