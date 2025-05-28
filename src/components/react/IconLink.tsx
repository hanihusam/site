import cn from "@/scripts/cn";

function IconLink(props: React.ComponentPropsWithRef<"a">) {
  return (
    <a
      className={cn("duration-500 hover:-translate-y-1.5", props.className)}
      {...props}
    >
      {props.children}
    </a>
  );
}

export { IconLink };
