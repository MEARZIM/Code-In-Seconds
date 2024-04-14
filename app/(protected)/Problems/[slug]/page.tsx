import React from 'react'

const page = ({
    params
}: {
    params: {
        slug: string
    }
}) => {
  return (
    <div>
      In problem  slug: {params.slug}
    </div>
  )
}

export default page
