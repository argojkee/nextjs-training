import style from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={style.nav}>
      <Link href="/" className={style.logo}>
        <Image src="/logo.jpg" width={60} height={60} alt="logotype" className="logotype" />
      </Link>
      <ul className={style.links}>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={pathname === path ? style.active : null}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
