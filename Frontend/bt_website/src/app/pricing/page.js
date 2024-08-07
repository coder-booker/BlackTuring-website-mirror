import style from './pricing.module.css';
import Headbar from '@/components/shared/NavBar/nav_bar';
import PricingContent from '@/components/features/pricing/PricingContent';


export default function Pricing() {
  return (
    <div id="main">
      <div id={style.pricing}>
        <Headbar />
        <PricingContent />
      </div>
    </div>
  );
}