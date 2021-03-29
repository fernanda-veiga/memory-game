import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        Created by{" "}
        <a
          href="https://github.com/fernanda-veiga/memory-game"
          rel="noreferrer noopener"
          target="_blank"
          title="Github Repository"
        >
          Fernanda Veiga
        </a>
      </p>
      <p>
        Icons made by{" "}
        <a
          href="https://www.freepik.com"
          rel="noreferrer noopener"
          target="_blank"
          title="Freepik"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          rel="noreferrer noopener"
          target="_blank"
          title="Flaticon"
        >
          Flaticon
        </a>
      </p>
    </footer>
  );
}

export default Footer;
