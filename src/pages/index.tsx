import Link from 'next/link'

export default function Index() {
  return (
    <>
      <div>
        <ul>
          <Link href={'./sample/01'}><li>Sample01</li></Link>
          <Link href={'./samples/02'}><li>Sample02</li></Link>
        </ul>
      </div>
    </>
  )
}