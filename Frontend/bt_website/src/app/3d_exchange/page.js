import style from './3d_exchange.module.css';
import Headbar from '@/components/shared/NavBar/nav_bar';
import ExchangeContent from '@/components/features/3d_exchange/ExchangeContent';


export default function Exchange() {
  return (
    <div id="main">
      <div id={style['3d-exchange']}>
        <Headbar />
        <ExchangeContent />
      </div>
    </div>
  );
}