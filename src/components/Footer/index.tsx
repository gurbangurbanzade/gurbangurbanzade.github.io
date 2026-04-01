"use client";
import React from "react";
import Link from "next/link";
import "./style.scss";

interface FooterProps {
  onButtonClick?: () => void;
}

function Footer({ onButtonClick }: FooterProps = {}) {
  return (
    <footer>
      <div className="footerItems container">
        <div className="leftFooter" />
        <div className="rightFooter">
          <div className="links">
            <p>
              <Link href="/" className="p">
                Contact
              </Link>
            </p>
          </div>
          <div className="links">
            <p>
              <Link href="/" onClick={onButtonClick} className="p">
                Projects
              </Link>
            </p>
          </div>
          <div className="links">
            <p>
              <Link href="/" className="p">
                Riddle
              </Link>
            </p>
          </div>
          <div className="links">
            <p>
              <Link href="/" className="p">
                Blog
              </Link>
            </p>
          </div>
          <div className="links">
            <p>
              <Link href="/" className="p">
                About
              </Link>
            </p>
          </div>
          <div className="links">
            <p>
              <Link href="/" className="p">
                Career
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
