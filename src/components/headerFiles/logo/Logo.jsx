import Image from "next/image";
import Link from "next/link";
import logo from '../../../../public/Logo.png'
import styles from './Logo.module.css'
const Logo = () => {
    return (
    <Link href={'/'}>
    <Image 
    className={styles.logo}
    src={logo} alt="logo"/>
    </Link>
    );
  };
  
  export default Logo;