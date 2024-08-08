import { Sidebar } from 'flowbite-react';
import {
  HiAnnotation,
  HiArrowSmRight,
  HiChartPie,
  HiDocumentText,
  HiOutlineUserGroup,
  HiUser,
} from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DashSidebar() {
  const { currentUser } = useSelector((state) => state.user);
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
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser && currentUser.isAdmin && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as="div"
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>

          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as="div"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}

          {currentUser.isAdmin && (
            <>
              <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as="div"
                >
                  Users
                </Sidebar.Item>
              </Link>
              <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as="div"
                >
                  Comments
                </Sidebar.Item>
              </Link>
            </>
          )}

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
