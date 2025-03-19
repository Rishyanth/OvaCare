import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">OvaCare</h3>
            <p className="text-muted-foreground">
              AI-powered PCOS/PCOD detection and management platform to help
              women take control of their reproductive health.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/assessment"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Take Assessment
                </Link>
              </li>
              <li>
                <Link
                  to="/management"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Management Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Chat Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About PCOS/PCOD
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Health Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} OvaCare. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Disclaimer: This application is for informational purposes only and
            is not a substitute for professional medical advice, diagnosis, or
            treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
