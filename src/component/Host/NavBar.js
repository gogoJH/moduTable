import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";

export default function NavBar() {
  const scrollToTop = () => {
    console.log(1);
    scroll.scrollToTop();
  };

  return (
    // please map these Links
    <div className="NavBar">
      <ul className="NavBar-Box">
        <Link
          className="link"
          activeClass="active"
          to="Experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="Reviews"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Reviews
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="Place"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Place & Amenities
        </Link>
      </ul>
      <div id="NavBar-topButton" onClick={scrollToTop}>
        Top
      </div>
    </div>
  );
}
