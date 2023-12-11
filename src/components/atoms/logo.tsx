import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link aria-label="navigate to products page" href="/" title="navigate to products page">
      <Image alt="N5 Logo" aria-label="N5 Logo" height={70} src="/logo.svg" width={150} />
    </Link>
  );
}
