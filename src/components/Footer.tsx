
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text">
            Imtiaz Ahmed
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Back to top ↑
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Imtiaz Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
