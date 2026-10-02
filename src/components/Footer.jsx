function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-logo" aria-hidden="true">
            SG
          </span>

          <div>
            <strong>Still Gallery</strong>
            <span>ছবির ছোট্ট এক সংগ্রহ</span>
          </div>
        </div>

        <div className="footer-credit">
          <span>
            © {currentYear} Still Gallery
          </span>

          <span className="footer-separator">·</span>

          <span>
            তথ্যসূত্র:{' '}
            <a
              href="https://jsonplaceholder.typicode.com/photos"
              target="_blank"
              rel="noreferrer"
            >
              JSONPlaceholder Photos API
            </a>
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer