import { Button } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { PageMeta } from '../components/PageMeta'

export function NotFound() {
  return (
    <>
      <PageMeta title="Page not found · Shikhar Group" description="That page is not on the Shikhar Group site." />
      <PageHero eyebrow="404" title="This page is not on the site." lede="The address may be mistyped, or the page was never part of this demonstration." />
      <div className="px-5 py-10">
        <Button to="/" arrow>
          Back to the home page
        </Button>
      </div>
    </>
  )
}
