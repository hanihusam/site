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
  h1: "leading-tight font-black text-heading2 md:text-heading1",
  h2: "leading-tight font-bold text-heading3 md:text-heading2",
  h3: "font-medium text-heading4 md:text-heading3",
  h4: "font-medium text-heading5 md:text-heading4",
  h5: "font-medium text-heading6 md:text-heading5",
  h6: "font-medium text-heading6",
};

const titleColors = {
  primary: "text-sky-200",
  secondary: "text-sunset-200 dark:text-neutral-100",
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

function H5(props: TitleProps) {
  return <Title {...props} size="h5" />;
}

function H6(props: TitleProps) {
  return <Title {...props} size="h6" />;
}

interface ParagraphProps
  extends React.PropsWithChildren<React.ComponentPropsWithoutRef<"p">> {
  dangerouslySetInnerHTML?: { __html: string };
  prose?: boolean;
  textColorClassName?: string;
  as?: React.ElementType;
}

function Paragraph({
  className,
  prose = true,
  as = "p",
  textColorClassName = "text-neutral-500 dark:text-neutral-100",
  ...rest
}: ParagraphProps) {
  return createElement(as, {
    className: cn(
      "text-paragraph font-regular max-w-full",
      textColorClassName,
      className,
      {
        "prose prose-light dark:prose-dark": prose,
      },
    ),
    ...rest,
  });
}

export { H1, H2, H3, H4, H5, H6, Paragraph };
