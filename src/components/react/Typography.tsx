import { createElement } from "react";

import cn from "@/scripts/cn";

interface TitleProps extends React.PropsWithChildren {
  variant?: "primary" | "secondary";
  as?: React.ElementType;
  className?: string;
  id?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const fontSize = {
  h1: "font-black text-heading2 md:text-heading1",
  h2: "font-bold text-heading3 md:text-heading2",
  h3: "font-semibold text-heading4 md:text-heading3",
  h4: "font-medium text-heading5 md:text-heading4",
};

const titleColors = {
  primary: "text-sky-600",
  secondary: "text-sunset-400 dark:text-neutral-100",
};

function Title({
  variant = "primary",
  size,
  as,
  className,
  ...rest
}: TitleProps & { size: keyof typeof fontSize }) {
  const Tag = as ?? size;
  return (
    <Tag
      className={cn(fontSize[size], titleColors[variant], className)}
      {...rest}
    />
  );
}

function H1(props: TitleProps) {
  return <Title {...props} size="h1" />;
}

function H2(props: TitleProps) {
  return <Title {...props} size="h2" />;
}

function H3(props: TitleProps) {
  return <Title {...props} size="h3" />;
}

function H4(props: TitleProps) {
  return <Title {...props} size="h4" />;
}

interface ParagraphProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"p">> {
  dangerouslySetInnerHTML?: { __html: string };
  textColorClassName?: string;
  as?: React.ElementType;
}

function Paragraph({
  className,
  as = "p",
  textColorClassName = "text-neutral-900 dark:text-neutral-100",
  ...rest
}: ParagraphProps) {
  return createElement(as, {
    className: cn(
      "text-paragraph font-regular max-w-full",
      textColorClassName,
      className,
    ),
    ...rest,
  });
}

interface LeadProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"p">> {
  textColorClassName?: string;
  as?: React.ElementType;
}

function Lead({
  className,
  as = "p",
  textColorClassName = "text-neutral-900 dark:text-neutral-100",
  ...rest
}: LeadProps) {
  return createElement(as, {
    className: cn("text-lead max-w-full", textColorClassName, className),
    ...rest,
  });
}

interface CaptionProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"span">> {
  as?: React.ElementType;
}

function Caption({ className, as = "span", ...rest }: CaptionProps) {
  return createElement(as, {
    className: cn(
      "text-caption text-neutral-500 dark:text-neutral-400",
      className,
    ),
    ...rest,
  });
}

interface LabelProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"span">> {
  as?: React.ElementType;
}

function Label({ className, as = "span", ...rest }: LabelProps) {
  return createElement(as, {
    className: cn(
      "text-label text-neutral-700 dark:text-neutral-300",
      className,
    ),
    ...rest,
  });
}

interface OverlineProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"span">> {
  as?: React.ElementType;
}

function Overline({ className, as = "span", ...rest }: OverlineProps) {
  return createElement(as, {
    className: cn(
      "text-overline uppercase text-neutral-500 dark:text-neutral-400",
      className,
    ),
    ...rest,
  });
}

interface CodeProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"code">> {
  as?: React.ElementType;
}

function Code({ className, as = "code", ...rest }: CodeProps) {
  return createElement(as, {
    className: cn(
      "text-code font-mono text-neutral-800 dark:text-neutral-200",
      className,
    ),
    ...rest,
  });
}

export { H1, H2, H3, H4, Paragraph, Lead, Caption, Label, Overline, Code };
