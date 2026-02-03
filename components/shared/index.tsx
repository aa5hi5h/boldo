import Link from "next/link";
import { cn } from "../../lib/utils";

const NavLink = ({
  linkName,
  index,
  className,
}: {
  linkName: string;
  index?: number;
  className?: string;
}) => {
  return (
    <Link
      className={cn(
        "font-mono group tracking-[-1%] relative text-nowrap",
        className,
      )}
      href={`/#${linkName.split(" ").join("").toLowerCase()}`}
    >
      {linkName}
    </Link>
  );
};

export default NavLink;