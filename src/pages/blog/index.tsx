import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface Node {
  frontmatter: {
    date: string;
    title: string;
    slug: string;
  };
  id: string;
  excerpt: string;
}

interface BlogPageProps {
  data: {
    allMdx: {
      nodes: Node[];
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      {
        data.allMdx.nodes.map((node: Node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link> 
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`


export const Head = () => <Seo title="Blog" />

export default BlogPage
