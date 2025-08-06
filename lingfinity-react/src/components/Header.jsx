import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <h2 className="logo">LingFinity</h2>
      <nav>
        <ul>
          <li><a href="#"><button>home</button></a></li>
          <li><a href="#"><button>matches</button></a></li>
          <li><a href="#"><button>messages</button></a></li>
          <li><a href="#"><button>profile</button></a></li>
        </ul>
      </nav>
      <button>Get Started</button>
    </header>
  );
};

export default Header;