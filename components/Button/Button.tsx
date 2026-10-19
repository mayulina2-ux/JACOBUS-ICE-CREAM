import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

type Common = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsLink = Common & { href: string; external?: boolean };
type AsButton = Common & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

/** Botón pill. Primario neón-pink, secundario outline de 3 px y ghost. */
export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", children, className } = props;
  const cls = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");

  if (props.href !== undefined) {
    const { href, external } = props as AsLink;
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, type = "button", ...rest } =
    props as AsButton;
  return (
    <button className={cls} type={type} {...rest}>
      {children}
    </button>
  );
}
