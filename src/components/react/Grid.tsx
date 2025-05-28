import cn from "@/scripts/cn";

interface GridProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
  overflow?: boolean;
  className?: string;
  as?: React.ElementType;
  id?: string;
  nested?: boolean;
  smFull?: boolean;
  rowGap?: boolean;
  featured?: boolean;
}

function Grid({
  children,
  className,
  as: Tag = "div",
  featured,
  nested,
  smFull,
  rowGap,
  id,
  ref,
}: GridProps) {
  return (
    <Tag
      className={cn("relative", {
        "mx-10vw": !nested,
        "w-full": nested,
        "md:mx-10vw !mx-0 w-full md:w-auto": smFull,
        "py-10 md:py-24 lg:pt-36 lg:pb-40": featured,
      })}
      id={id}
      ref={ref}
    >
      {featured ? (
        <div className="-mx-5vw absolute inset-0">
          <div className="bg-secondary max-w-8xl mx-auto h-full w-full rounded-lg" />
        </div>
      ) : null}

      <div
        className={cn(
          "relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6",
          {
            "mx-auto max-w-7xl": !nested,
            "gap-y-8": rowGap,
          },
          className,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

export { Grid };
