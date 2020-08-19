import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#050505"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
    <rect x="1" y="23" rx="0" ry="0" width="381" height="38" />
  </ContentLoader>
)

export default MyLoader