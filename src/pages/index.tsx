import Link from 'next/link'
import style from '@/styles/index.module.scss'
import { Header } from '@/components/Header'

export default function Index() {
  return (
    <>
      <Header title={'Framer Motion.'} />
      <div className={style.wrap}>
        <ul>
          <Link href={'./sample/01'}><li>Sample01</li></Link>
          <Link href={'./sample/02'}><li>Sample02</li></Link>
          <Link href={'./sample/03'}><li>Sample03</li></Link>
          <Link href={'./sample/04'}><li>Sample04</li></Link>
          <Link href={'./sample/05'}><li>Sample05</li></Link>
        </ul>
      </div>
    </>
  )
}