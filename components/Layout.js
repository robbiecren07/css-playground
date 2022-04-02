import Navbar from "./Navbar"

const Layout = ({ children }) => {

  return (
    <div className="__layout">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout