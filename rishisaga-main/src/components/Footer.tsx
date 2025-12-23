const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Rishi Sagade. All rights reserved.</p>
          <p>Designed & Built with passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
