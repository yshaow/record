/**
 * 懒加载 容器
 *      用来异步加载组件
 */
import React,{ Component }from 'react'

export default class Bundle extends Component{
    constructor(props){
        super(props);

        this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.props.children(this.state.mod)
    }
}
