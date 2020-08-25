import React from "react"
import ContentLoader from "react-content-loader"

const ArticleFull = (props) => (
  <ContentLoader 
    speed={2}
    width={450}
    height={220}
    viewBox="0 0 450 220"
    backgroundColor="#ffffff28"
    foregroundColor="#c1c1c1"
    {...props}
  >
    <rect x="15" y="13" rx="5" ry="5" width="180" height="10" /> 
    <rect x="15" y="100" rx="3" ry="3" width="410" height="8" /> 
    <rect x="15" y="114" rx="3" ry="3" width="380" height="8" /> 
    <rect x="15" y="128" rx="3" ry="3" width="280" height="8" /> 
    <rect x="5" y="1" rx="5" ry="5" width="5" height="200" /> 
    <rect x="438" y="1" rx="5" ry="5" width="5" height="200" /> 
    <rect x="6" y="197" rx="5" ry="5" width="436" height="5" /> 
    <rect x="6" y="0" rx="5" ry="5" width="436" height="5" /> 
    <rect x="15" y="33" rx="5" ry="5" width="150" height="10" /> 
    <rect x="15" y="55" rx="5" ry="5" width="130" height="10" /> 
    <rect x="15" y="150" rx="3" ry="3" width="410" height="8" /> 
    <rect x="15" y="164" rx="3" ry="3" width="380" height="8" /> 
    <rect x="15" y="178" rx="3" ry="3" width="280" height="8" /> 
    <rect x="247" y="13" rx="15" ry="15" width="177" height="71" />
  </ContentLoader>
)
ArticleFull.metadata = {
    name: 'Dionisio Gonzalez',
    github: 'dg0397',
    description: 'Complete article',
    filename: 'ArticleFull'
  }
  

export default function SpinnerFullArticle(){
  return(
    <div style = {{margin : "4rem auto"}} >
      <ArticleFull />
    </div>
  )
}