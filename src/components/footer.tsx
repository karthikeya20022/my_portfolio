'use client';

import {Linkedin, Github} from 'lucide-react';
import {Button} from './ui/button';
import {useEffect, useState} from 'react';

const Footer = () => {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/arvapalli-karthikeya-gupta-b9803b1b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://github.com/karthikeya20022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
        </div>
        <p>
          &copy; {year || new Date().getFullYear()} Arvapalli Karthikeya Gupta.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
