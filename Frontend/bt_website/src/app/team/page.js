import style from './team.module.css';
import Headbar from '../../components/core/NavBar/NavBar';
import TeamContent from '@/components/features/team/TeamContent';


export default function Team() {
  return (
    <div id="main">
      <div id={style.team}>
        <Headbar />
        <TeamContent />
      </div>
    </div>
  );
}