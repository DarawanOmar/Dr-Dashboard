"use client";
import React from "react";

type LangLayoutProps = {
  lang: string;
  children: React.ReactNode;
};

function LangLayout({ lang, children }: LangLayoutProps) {
  React.useEffect(() => {
    if (["kr", "ar"].find((lang) => lang == lang)) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [lang]);
  return <div>{children}</div>;
}

export default LangLayout;
