import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <Link href={'./samples/01'}><li>Sample01:メニュー表</li></Link>
          <Link href={'./samples/02'}><li>Sample02:マウスストーカー</li></Link>
          <Link href={'./samples/03'}><li>Sample03:スクロールに合わせてバーが出てくる</li></Link>
          <Link href={'./samples/04'}><li>Sample04:メニュー表２</li></Link>
          <Link href={'./samples/05'}><li>Sample05:</li></Link>
          <Link href={'./samples/06'}><li>Sample06:HoverButton</li></Link>
          <Link href={'./samples/07'}><li>Sample07:DragBox</li></Link>
          <Link href={'./samples/08'}><li>Sample08:PortFolio(色違い)</li></Link>
          <Link href={'./samples/09'}><li>Sample09:マウスストーカーv2</li></Link>
          <Link href={'./samples/10'}><li>Sample10:</li></Link>
        </ul>
      </div>
    </>
  )
}