import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <Link href={'./samples/01'}><li>Sample01:メニュー表</li></Link>
          <Link href={'./samples/02'}><li>Sample02:マウスストーカー</li></Link>
          <Link href={'./samples/03'}><li>Sample03:スクロールに合わせてバーが出てくる</li></Link>
        </ul>
      </div>
    </>
  )
}