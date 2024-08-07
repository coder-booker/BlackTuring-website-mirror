import Logo from "@/components/core/Logo/Logo";
import NavBar from "@/components/core/NavBar/NavBar";
import JoinButton from '@/components/core/JoinButton/JoinButton';

export default function Header() {
  return (
    <div id="header">
      <Logo />
      <NavBar />
      <JoinButton />
    </div>
  );
};