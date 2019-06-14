import { useStaticQuery, graphql } from 'gatsby'
import { transform } from 'components/LinkButtonAuto/util'

export const dataHook = () => {
  const { allFile } = useStaticQuery(
    graphql`
      {
        allFile(
          filter: {
            extension: { regex: "/md/" }
            sourceInstanceName: { eq: "data" }
            name: { eq: "nav" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  buttons {
                    ...Buttons
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const edges = allFile.edges.map(file => {
    const markdown = file.node.childMarkdownRemark
    return {
      // Transform 'class' to 'className' to be react-compliant
      buttons: transform(markdown.frontmatter.buttons),
    }
  })
  // Lift first element or return null
  if (edges.length >= 1) return edges[0]
  else return null
}
