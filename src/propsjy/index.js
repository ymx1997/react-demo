import React, { Component } from 'react'
import PropTypes from 'prop-types';

// 函数组件
const FnColors = (props)=>{
    const {colors} = props;
    return (
        <ul>
            {
                colors.map((item,index)=><li style={{backgroundColor:item}} key={index}>{item}</li>)
            }
        </ul>
    )
}

// 做props校验
FnColors.propTypes = {
    colors:PropTypes.array.isRequired,
    // str: PropTypes.string
    obj: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.string
    })
}

// 设置默认值
FnColors.defaultProps = {
    colors:['green','orange'],
    obj:{a:1,b:'sdjif'}
}

class Chi extends Component {
    static propTypes = {
        a:PropTypes.number
    }
    static defaultProps = {
        a:100000
    }
    render() {
        return (
            <div>
                {this.props.a}
            </div>
        )
    }
}

// Chi.propTypes = {
//     a: PropTypes.number
// }


// 父组件
class Index extends Component {
    state = {
        colors: ['red', 'blue', 'purple']
        // colors: 100
    }
    render() {
        return (
            <div>
                <FnColors str={'10asda'}/>
                <hr/>
                <Chi />
            </div>
        )
    }
}

export default Index
