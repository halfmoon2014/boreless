import React, {Component} from 'react'
import Li from './ListItem';

class DropList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const listItem = this.props.item.map((mlist) => <Li key={mlist.id} id={mlist.id} text={mlist.text} url="#"/>)
        //console.log(listItem)
        return (
            <li className="dropdown"  data-id={this.props.id}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">{this.props.text} <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    {listItem}
                </ul>
            </li>
        );
    }
}

export default DropList