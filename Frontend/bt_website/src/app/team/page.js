import style from './team.module.css';
import Header from '@/components/shared/Header/Header';
import TeamContent from '@/components/features/team/TeamContent';


export default function Team() {
  return (
    <div id="main">
      <div id={style.team}>
        <Header />
        <TeamContent />
      </div>
    </div>
  );
}