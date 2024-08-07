import style from './more.module.css';
import Headbar from '@/components/shared/NavBar/nav_bar';
import MoreContent from '@/components/features/more/MoreContent';


export default function More() {
  return (
    <div id="main">
      <div id={style.more}>
        <Headbar />
        <MoreContent />
      </div>
    </div>
  );
}