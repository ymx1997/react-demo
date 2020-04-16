import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Index from './componentfz';
// import App from './App';


// 创建react元素(React.creatElement())
// const h1 = React.createElement('h1', {className:'title'}, 'hello react-cli!')

// jsx 去创建react元素
// * 声明式写html（再脚手架的js）=> jsx
// const tpl = (<h1 className="title">
//   hello react cli!
//   <p>
//     p!
//     <span>span</span>
//   </p>
// </h1>)

// jsx使用表达式
// 值，变量，函数调用，三元运算符，数组(基本类型，jsx)
// let str = '阿宾的风流往事';
// function hi () {
//   return <h1>泡妞</h1>;
// }
// function hi2 () {
//   return <h2>抽烟</h2>;
// }
// function hi3 () {
//   return <h3>打游戏</h3>;
// }
// const jsx = (
//   <div>
//     <h1>{str}</h1>
//     <p>{'我叫阿宾'}</p>
//     <p>{'今年'+20}</p>
//     <span>几个爱好</span>
//     <ul>
//       <li>{hi()}</li>
//       <li>{hi2()}</li>
//       <li>
//         {[hi3()]}
//       </li>
//     </ul>
//     <p>问我傻不傻？</p>
//       <h1>
//         {true?'傻':'不傻才怪'}
//       </h1>
//   </div>
// )
// var isLoading = true;
// const loadData = () => {
//   if (isLoading) {
//     return <div>Loading...</div>
//   }
//    return (
//     <div>数据加载完成</div>
//   )
// }
// const dv = (
//   <div>
//     {loadData()}
//   </div>
// )
// const songs = [
//   {id: 1, name: '自由飞翔'},
//   {id: 2, name: '青藏高原'},
//   {id: 3, name: '套马杆'},
// ]
// const list = (
//   <ul className = 'title'>
//     {songs.map(item => <li key={item.key}>{item.name}</li>)}
//   </ul>
// )
// class Index extends React.Component {
//   // constructor() {
//   //   super()
//   //   // 初始化state
//   //   this.state = {
//   //     count: 1
//   //   }
//   // }
//   // 简化语法
  
//   state = {
//     count: 0
//   }
  
//   render () {
//     return (
//     <div>有状态组件, {this.state.count}</div>
//     )
//   }
// }
ReactDOM.render(
  <Index />,
  // tpl,
  // h1,
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>,
  document.getElementById('root')
);