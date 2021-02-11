import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container'
import Header from "./header"
import netlifyIdentity from "netlify-identity-widget"

const Layout = ({ children }) => {
  const [user, setUser] = useState(netlifyIdentity ? netlifyIdentity.currentUser : undefined)

  useEffect(() => {
    netlifyIdentity.init({})
  }, [])

  netlifyIdentity.on("login", user => {
    netlifyIdentity.close()
    setUser(user)
  })
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close()
    setUser()
  })

  return (
    <Container>
      <Header user={user} netlifyIdentity={netlifyIdentity} />
      {user ? <main>{children}</main> : <div>You must log in to access this site</div>}
    </Container>
  )
}

export default Layout