import React, { Component, Fragment } from "react";
import Input from "../Components/Input"
import Bar from "../Components/Bar"
var zxcvbn = require('zxcvbn');

class Password extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            suggestion: '',
            result: undefined,
            width: 0
        }
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })

        let result = zxcvbn(e.target.value)
        this.setState({
            suggestion: e.target.value === '' ? '' : result.feedback.suggestions[0],
            result: e.target.value === '' ? undefined : {...this.props.strength[result.score]},
            width: e.target.value === '' ? 0 : (result.score+1) * 20
        })
    }

    render() {
        return (
            <Fragment>
                <Input type="text" value={this.state.password}
                    onChange={this.handleChangePassword} />
                <Bar height='5px' width={`${this.state.width}%`} bgColor={this.state.width == 0 ? '' : this.state.result.bgColor} />
                <p>{this.state.result === undefined ? 'Password Input' : this.state.result.text}</p>
                <p id="suggestion">{this.state.suggestion !== '' ? this.state.suggestion : ''}</p>
            </Fragment>
        )
    }


}

export default Password;