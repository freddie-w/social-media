export interface IPrimaryNavigation {
  name: string;
  href: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

export interface ISecondaryNavigation {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}
