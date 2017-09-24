import React, {Component} from 'react'
class ListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return <li  key={this.props.id} data-id={this.props.id}><a href={this.props.url}>{this.props.text}</a></li>
    }
}
export default ListItem