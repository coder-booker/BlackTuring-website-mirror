import style from './home.module.css';
import Header from '@/components/shared/Header/Header';
import HomeContent from "@/components/features/home/HomeContent";

export default function Home() {
  return (
    <div id="main">
      <div id={style.home}>
        <Header />
        <HomeContent />
      </div>
    </div>
  );
}
