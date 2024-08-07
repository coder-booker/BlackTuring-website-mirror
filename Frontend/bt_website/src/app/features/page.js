import style from './features.module.css';
import Headbar from '@/components/shared/NavBar/nav_bar';
import FeaturesContent from '@/components/features/features/FeatureContent';



export default function Features() {
  return (
    <div id="main">
      <div id={style.features}>
        <Headbar />
        <FeaturesContent />
      </div>
    </div>
  );
}