import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" style={{ color: "GrayText" }} /> with <i className="fas fa-heart" style={{ color: "red" }} /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/iamayushtiwari"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Ayush Tiwari
          </span>
        </a>{" "}
        using <i className="fab fa-node fa-lg" />
        {/* <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p> */}
      </Container>
    </footer>
  );
};

export default Footer;
