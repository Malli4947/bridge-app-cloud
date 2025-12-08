import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/80 text-sm">
            © 2024 Mallikarjuna Rao. All rights reserved.
          </p>
          
          <p className="text-background/80 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
