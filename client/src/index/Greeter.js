import React, {Component} from 'react'
import config from './config.json';
import DropList from '../DropList';
import ListItem from '../ListItem';
class Greeter extends Component {
    render() {
        const nav=config.menu.map((message)=>{
            if(message.list){
                return  <DropList key={message.id} id={message.id} text={message.text} item={message.list} />
            }else {
              return  <ListItem key={message.id} id={message.id} text={message.text} url="http://www.baidu.com"/>
            }
        });
        return (
            <div>
                {/*<!-- Fixed navbar -->*/}
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">BPro.</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                {nav}
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {config.right.map((message)=><ListItem key={message.id} id={message.id} text={message.text} url="#"/>)}
                            </ul>
                        </div>{/*<!--/.nav-collapse -->*/}
                    </div>
                </nav>

                <div className="container">

                    {/*<!-- Main component for a primary marketing message or call to action -->*/}
                    <div className="jumbotron">
                        <h1>Navbar example</h1>
                        <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                        <p>To see the difference between static and fixed top navbars, just scroll.</p>
                        <h1>Navbar example</h1>
                        <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                        <p>To see the difference between static and fixed top navbars, just scroll.</p>
                        <h1>Navbar example</h1>
                        <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                        <p>To see the difference between static and fixed top navbars, just scroll.</p>
                        <p>
                            <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
                        </p>
                    </div>

                </div> {/*<!-- /container -->*/}


            </div>
        );
    }
}

export default Greeter

