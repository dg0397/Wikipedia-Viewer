import React from "react"
import ContentLoader from "react-content-loader"

const Article = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={200}
    viewBox="0 0 500 200"
    backgroundColor="#7f1a1a"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="13" rx="3" ry="3" width="150" height="8" />
    <rect x="15" y="27" rx="3" ry="3" width="410" height="8" />
    <rect x="15" y="41" rx="3" ry="3" width="380" height="8" />
    <rect x="15" y="55" rx="3" ry="3" width="280" height="8" />
    <rect x="5" y="1" rx="5" ry="5" width="5" height="75" />
    <rect x="438" y="1" rx="5" ry="5" width="5" height="75" />
    <rect x="6" y="72" rx="5" ry="5" width="436" height="5" />
    <rect x="6" y="0" rx="5" ry="5" width="436" height="5" />
  </ContentLoader>
)

Article.metadata = {
  name: 'Dionisio Gonzalez',
  github: 'dg0397',
  description: 'Simple Article',
  filename: 'Article'
}

export default function SpinnerArticles() {
  const list = [0,1,2];
  const spinners = list.map(num => {
    return (
      <Article key = {num} />
    )
  });

  return(
    <>
      {spinners}
    </>
  )
}