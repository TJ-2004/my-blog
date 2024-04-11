import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
export default function DashSidebar() {
  const location = useLocation();
  // console.log(location);
  const dispatch = useDispatch();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    // console.log(urlParams);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    // console.log(tabFromUrl);
  }, [location.search]);
  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={'User'}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item
            icon={HiArrowSmRight}
            onClick={handleSignOut}
            className="cursor-pointer"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
