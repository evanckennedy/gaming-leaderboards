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
    <div className="flex flex-col justify-center gap-1 3xl:gap-1.5 4xl:gap-5">
      <div className="flex justify-end text-white-100 3xl:text-2xl 4xl:text-5xl font-black">
        <span className="mr-1 3xl:mr-1.5 4xl:mr-3">Signed in as:</span>
        <div className="hover:text-secondary transition-colors duration-300 ease-out cursor-pointer">
          <span>{firstName} </span>
          <span>{lastName}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="uppercase text-white-100 3xl:text-2xl 4xl:text-5xl font-black hover:text-secondary transition-colors duration-300 ease-out"
        >
          Sign Out &gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default UserStatus;
