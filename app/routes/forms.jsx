import { Outlet } from "remix"

export default function Home() {
  return (
    <div>
      <h1>Forms</h1>
        <Outlet />
    </div>
  )
}
