import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer>
                <h2>Checkout some of my other works, codes and links</h2>
                <ul>
                    <li><a href="linkedin.com/in/pravesh-shrestha" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize: "30px"}}></i></a></li>
                    <li><a href="http://www.heypravesh.com" target="_blank">www.heypravesh.com</a></li>
                    <li><a href="linkedin.com/in/pravesh-shrestha" target="_blank"><i className="fa fa-github-square" aria-hidden="true" style={{fontSize: "30px"}}></i></a></li>
                </ul>
            </footer>

        );
    }
}

export default Footer;