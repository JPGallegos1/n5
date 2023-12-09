import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image alt="N5 Logo" height={70} src="/logo.svg" width={150} />
    </Link>
  );
}
