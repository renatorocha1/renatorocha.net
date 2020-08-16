import React from "react"

import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    background={hit.background}
    slug={hit.fields.slug}
    category={hit.category}
    date={hit.date}
    timeToRead={hit.timeToRead}
    title={hit.title}
    description={hit.description}
  />
)

export default Hit
