import style from './more.module.css';
import Header from '@/components/shared/Header/Header';
import MoreContent from '@/components/features/more/MoreContent';


export default function More() {
  return (
    <div id="main">
      <div id={style.more}>
        <Header />
        <MoreContent />
      </div>
    </div>
  );
}