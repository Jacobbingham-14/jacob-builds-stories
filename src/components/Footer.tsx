export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jacob Bingham. Built with care and creativity.
          </p>
          <p className="text-sm text-muted-foreground">
            "I believe creation is how we connect with God and make our mark on the world."
          </p>
        </div>
      </div>
    </footer>
  );
};
