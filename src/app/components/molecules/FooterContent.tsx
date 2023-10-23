import React from "react";
import { FooterLink } from "../atoms/FooterLink";

export const FooterContent = (props: { footerLinks: Array<string> }) => {
  return (
    <div className="">
      <div className="flex justify-center">
        <a
          className="" //aqui esta el posicionamiento
          href="https://midu.dev/" //añadir midu.dev link
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;
          <picture className="flex flex-center rounded-full">
            <img
              width="92"
              height="28"
              loading="lazy"
              src="https://midu.dev/logo.png"
              alt="midudev logo"
            />
          </picture>
        </a>
      </div>
      {props.footerLinks.map(link => <FooterLink key={link} linkText={link} />)}
    </div>
  );
};
