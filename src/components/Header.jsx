function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">

        <a className="brand" href="#page-title">
          <span className="brand-mark"></span>

          <span className="brand-text">
            <span className="brand-name">
              still gallery
            </span>

            <span className="brand-note">
              / everyday image archive
            </span>
          </span>
        </a>

        <nav className="main-nav">
          <a href="#page-title" className="nav-link active">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#gallery-title" className="nav-link">
            Gallery
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="header-info">
          <span className="header-dot"></span>
          <span>100 ছবি</span>
          <span className="header-divider">·</span>
          <span>অনলাইন সংগ্রহ</span>
        </div>

      </div>
    </header>
  )
}

export default Header