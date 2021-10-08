import { logout } from 'features/UserAuth';
import { useDispatch } from 'react-redux';

export default function TopbarUser() {
  const dispatch = useDispatch();

  return (
    <div className=" mx-2">
      <button className="p-2" type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
