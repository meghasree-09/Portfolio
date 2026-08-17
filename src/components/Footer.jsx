function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span>&lt;</span>Saraswata<span>/&gt;</span>
      </div>

      <p>
        Designed & Developed by Saraswata
      </p>

      <p>
        © {new Date().getFullYear()} Saraswata. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;