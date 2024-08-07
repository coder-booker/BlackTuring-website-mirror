import style from './3d_exchange.module.css';
import Header from '@/components/shared/Header/Header';
import ExchangeContent from '@/components/features/3d_exchange/ExchangeContent';


export default function Exchange() {
  return (
    <div id="main">
      <div id={style['3d-exchange']}>
        <Header />
        <ExchangeContent />
      </div>
    </div>
  );
}