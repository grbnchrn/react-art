import logo from '../assets/logo.png';
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <Image src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
