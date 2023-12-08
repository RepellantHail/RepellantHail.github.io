import Image from 'next/image'
import styles from './page.module.css'
import Main from './Main';

export default function Home() {
  return (
    <div className="container-fluid text-start vh-75 d-flex flex-column ">     
      <Main></Main>
    </div>
  );
}
