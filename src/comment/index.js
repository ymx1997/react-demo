import React, { Component } from 'react';

// 导入组件样式
import './index.css'

class Index extends Component {

  state = {
    // 评论列表数据
    list: [
      // {id:0,name:'周杰伦',content:'哎呦不错哦！'},
      // {id:1,name:'陈奕迅',content:'如果那两个字没有颤抖、'},
      // {id:2,name:'林俊杰',content:'圈圈圆圆圈圈~'},
    ],
    // 用户名字
    name: '',
    // 评论内容
    content: ''
  }

  renderList() {
    // 获取状态数据
    const { list } = this.state;
    return list.length > 0 ? this.state.list.map((item) =>
      <li key={item.id}>
        <p className="pline">{item.name}</p>
        <p>{item.content}</p>
      </li>
    ) : <li className="nodata"><p>暂无评论！</p></li>
  }
  // 双向绑定
  handlerChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // 发表评论
  publish = () => {
    const { name, content } = this.state;
    if(!name || !content ) return alert('你需要写点啥才能发布！');
    let newArr = [...this.state.list, {
      id: this.state.list.length + 1,
      name,
      content
    }]
    this.setState({
      list: newArr,
      name: '',
      content: ''
    })
  }

  render() {
    return (
      <div className="box">
        <h1>评论demo</h1>
        {/* 发表评论 */}
        <div className="pub">
          <p>用户：<input name="name" value={this.state.name} onChange={this.handlerChange} type="text" /></p>
          <p>内容：<textarea name="content" value={this.state.content} onChange={this.handlerChange} /></p>
          <p><button onClick={this.publish} className="btn">发布评论</button></p>
        </div>
        {/* 评论列表 */}
        <hr className="line" />
        <ul className="list">
          {
            this.renderList()
          }
        </ul>
      </div>
    );
  }
}

export default Index;