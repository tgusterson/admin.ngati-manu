import React from "react"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import Button from 'react-bootstrap/Button';
import Header from "./header"
import "react-netlify-identity-widget/styles.css"

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  // console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <div>
        {isLoggedIn && <Header />}
        {!isLoggedIn && <Button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Log Out` : "Log In"}
        </Button>}
      </div>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      {isLoggedIn ? <main>{children}</main> : <div>You must log in to access this site</div>}
    </>
  )
}

export default Layout