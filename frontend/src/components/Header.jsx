import { FaSignInAlt, FaSingOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/Auth/AuthSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = ()=>{
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }
  return (
    <header className="header">
      <div className="logi">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        {user ? (
          <button className="btn" onClick={onLogout}>logout</button>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
