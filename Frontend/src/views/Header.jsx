import { Component } from "react";
import "./Header.css";
import img from "../components/Assets/logo.png";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/">
          <img src={img} style={{width:100,height:40}} className='imglogo'/>
          </a>
          <div>
            <ul
              id="compo"
              className={this.state.clicked ? "#compo active" : "#compo"}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/AboutUs">About</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/Contact">Size Guide</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;