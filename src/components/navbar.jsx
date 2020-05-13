import React from "react";

// for controlled/stateless component convert from class -> function (arrow function) that
// returns a react element - just the return
// THIS IS A STATELESS FUNCTIONAL COMPONENT
// in sfc needs to pass in props and remove this.
// const NavBar = (props) => {
// destructuring allows us to extract specific props
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="/">
//           Navbar
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
