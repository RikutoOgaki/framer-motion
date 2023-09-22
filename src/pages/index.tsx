import Link from 'next/link'
import style from '@/styles/index.module.scss'
import { Header } from '@/components/Header'

export default function Index() {
  return (
    <>
      <div className={style.wrap}>
        <Header title={'Framer Motion.'} />
        <ul>
          <Link href={'./sample/01'}><li>Sample01</li></Link>
          <Link href={'./samples/02'}><li>Sample02</li></Link>
        </ul>
      </div>
    </>
  )
}