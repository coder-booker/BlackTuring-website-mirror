import style from './pricing.module.css';
import Header from '@/components/shared/Header/Header';
import PricingContent from '@/components/features/pricing/PricingContent';


export default function Pricing() {
  return (
    <div id="main">
      <div id={style.pricing}>
        <Header />
        <PricingContent />
      </div>
    </div>
  );
}