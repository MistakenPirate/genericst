import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4"></nav>
  );
}

export function NavLink(props: ComponentProps<typeof<Link>>){
    return <Link></Link>
}