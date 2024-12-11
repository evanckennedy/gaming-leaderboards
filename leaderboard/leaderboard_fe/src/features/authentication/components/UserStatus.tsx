import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { logout } from "@/features/authentication/slices/userSlice";

function UserStatus() {
  const dispatch = useDispatch();
  const { isLoggedIn, userId, firstName, lastName } = useSelector(
    (state: RootState) => state.user,
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl">
        <span>Signed in as:</span>
        <div>
          <span>{firstName} </span>
          <span>{lastName}</span>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl hover:text-secondary transition-colors duration-300 ease-out"
      >
        Sign Out &gt;&gt;
      </button>
    </div>
  );
}

export default UserStatus;
