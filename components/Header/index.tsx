import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo-petittude.png";
import LangBR from "../../assets/br.png";
import LangEN from "../../assets/usa.png";
import { useState } from "react";
import classNames from "classnames";

export type LangType = "pt" | "en";

const defLangClass =
  "rounded-full overflow-hidden w-8 h-8 flex items-center cursor-pointer";

export default function Header() {
  const [lang, setLang] = useState<LangType>("pt");

  return (
    <header className="w-full border-b-[1px] border-gray-100 text-gray-500 py-2 flex justify-between px-8">
      <Image src={Logo} objectFit={"contain"} height={30} />

      <div className="flex items-center justify-center gap-2">
        <div
          onClick={() => setLang("pt")}
          className={classNames({
            [defLangClass]: true,
            "outline outline-blue-300": lang == "pt",
          })}
        >
          <Image src={LangBR} objectFit={"cover"} height={32} layout="fixed" />
        </div>
        <div
          onClick={() => setLang("en")}
          className={classNames({
            [defLangClass]: true,
            "outline outline-blue-300": lang == "en",
          })}
        >
          <Image src={LangEN} objectFit={"cover"} height={32} layout="fixed" />
        </div>
      </div>
    </header>
  );
}
