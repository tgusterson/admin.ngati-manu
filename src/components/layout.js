import React from "react"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import Container from 'react-bootstrap/Container';
import Header from "./header"
import "react-netlify-identity-widget/styles.css"

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
      <Container>
        <Header setDialog={setDialog} isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <main>{children}</main> : <div>You must log in to access this site</div>}
      </Container>
    </>
  )
}

export default Layout