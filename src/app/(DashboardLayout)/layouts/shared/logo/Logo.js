import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/images/logos/xtremelogo.svg" alt="logo"            
             width="132"
                height="31"/>
    </Link>
  );
};

export default Logo;
