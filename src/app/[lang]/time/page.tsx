import dynamic from 'next/dynamic'

const CurrentDateNew = dynamic(() => import('@/app/[lang]/components').then(
  (mod) => mod.CurrentDateNew),
  { ssr: false, loading: () => <p>Loading...</p> }
)

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-24">
      <CurrentDateNew />
    </div>
  )
}
