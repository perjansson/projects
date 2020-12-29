export const getIndexPageData = `{
  page(id: "3IVJ1ut6e4OTIDdn9M4cGd") {
    title,
    content: contentCollection {
      items {
        __typename
      	... on Carousel {
        	title
       	  projects:	projectsCollection {
            items {
              title
              role
              description { json }
            }
          }
      	}
        ... on Grid {
          title
        	projects:	projectsCollection {
            items {
              title
              role
              description { json }
            }
          }
        }
        ... on Tray {
          title
        	projects:	projectsCollection {
            items {
              title
              role
              description { json }
            }
          }
        }
      }
    }
  }
}`
