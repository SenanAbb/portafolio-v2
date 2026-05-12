'use client';

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="border-t-2 border-border">
      <div className="container-edge py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-black text-2xl uppercase tracking-tight">
            Sanan Abbasov<span className="text-accent">.</span>
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-fg mt-2">
            © {year} — Hecho con cafeína y código
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SenanAbb"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 flex items-center justify-center border-2 border-border hover:bg-fg hover:text-bg transition-colors"
          >
            <AiFillGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanan-abbasov/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 flex items-center justify-center border-2 border-border hover:bg-fg hover:text-bg transition-colors"
          >
            <AiFillLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:senan996@gmail.com"
            aria-label="Email"
            className="w-11 h-11 flex items-center justify-center border-2 border-border hover:bg-fg hover:text-bg transition-colors"
          >
            <AiFillMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
