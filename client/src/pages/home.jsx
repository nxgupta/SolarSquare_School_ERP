import { useSelector } from "react-redux"
import Admin from "./admin/admin"
import User from "./user/User"
const Home = () => {
  const { user } = useSelector(state => state.users)
 
  return (
    <div>
        {
          user?.role === "admin" ? (
            <Admin/>
          ) : (
            <User/>
          )
        }
    </div>
  )
}
export default Home