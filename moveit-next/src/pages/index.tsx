import { CompletedChallegens } from '../Components/CompletedChallegens';
import { ExperienceBar } from '../Components/ExperienceBar';
import { Profile } from '../Components/Profile';

import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallegens />
        </div>
        <div>
         
        </div>
      </section>
    </div>
  )
}
