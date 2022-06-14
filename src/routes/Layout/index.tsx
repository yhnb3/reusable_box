import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header>헤더</header>
      <main>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  )
}

export default Layout
