// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `2rem`,
//           }}
//         >
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from "react"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <nav style={{ background: "green" }}>
        {" "}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </>
  )
}

export default Layout