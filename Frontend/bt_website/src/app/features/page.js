import style from './features.module.css';
import Header from '@/components/shared/Header/Header';
import FeaturesContent from '@/components/features/features/FeatureContent';



export default function Features() {
  return (
    <div id="main">
      <div id={style.features}>
        <Header />
        <FeaturesContent />
      </div>
    </div>
  );
}