import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { HiBookOpen, HiOutlineUserCircle } from "react-icons/hi2";
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { UtilityContext } from '../../../contexts/UtillityProvider/UtilityProvider';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = ({ children }) => {
  const { screenWidth, theme, setTheme } = useContext(UtilityContext);

  const { user } = useContext(AuthContext);


  const [sideBar, setSidebar] = useState(false);

  useEffect(() => {
    if (screenWidth < 768) {
      setSidebar(true);
    } else {
      setSidebar(false)
    }

  }, [screenWidth])

  //dynamic nav items
  const navItems = [
    {
      title: 'Courses', path: '/courses'
    },
    {
      title: 'FAQ', path: '/faq'
    },
    {
      title: 'Blog', path: '/blog'
    },


  ];


  //theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (

    <nav className={` flex justify-between items-center px-1 md:px-3 lg:px-8 mt-0 md:mt-2 mb-3 pb-2 text-xl  border-b-1 sticky top-0 z-50  ${theme !== 'dark' && 'bg-white'}`}>
      <NavLink className="ms-1 md:ms-4 lg:ms-7 flex items-center" to='/'>
        <HiBookOpen />
        <div className='ms-3'>
          Learning Point
        </div>
      </NavLink>

      {
        sideBar ?
          <div className="block  dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              <RxHamburgerMenu />

            </label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-75vw mt-4">

              {
                navItems.map((navItem, _idx) => (<li
                  key={_idx} >
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? ` p-1 hover:cursor-pointer  rounded text-white  ${theme === 'dark' ? 'bg-slate-600' : 'bg-green-500'}`
                        :
                        ` p-1 hover:cursor-pointer  rounded ${theme === 'dark' ? 'hover:bg-slate-400 hover:text-white' : 'hover:bg-gray-100'}`
                    }
                    to={navItem.path}>
                    {
                      navItem.title
                    }
                  </NavLink>
                </li>))
              }

              <li>dfsjds</li>

              <li onClick={toggleTheme} >
                <a className='p-1 flex items-center'>
                  {
                    theme === 'dark' ?
                      <>Light<MdLightMode /> </>
                      :
                      <>Dark<MdDarkMode /> </>
                  }
                </a>
              </li>

            </ul>
          </div>
          :
          <ul className='flex items-center'>
            {
              navItems.map((navItem, _idx) => (<li
                key={_idx} >
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `md:me-3 lg:me-5 p-1 hover:cursor-pointer rounded text-white  ${theme === 'dark' ? 'bg-slate-600' : 'bg-green-500'}`
                      :
                      `md:me-3 lg:me-5 p-1 hover:cursor-pointer  rounded ${theme === 'dark' ? 'hover:bg-slate-400 hover:text-white' : 'hover:bg-gray-100'}`
                  }
                  to={navItem.path}>
                  {
                    navItem.title
                  }
                </NavLink>
              </li>))
            }
            <li
            >
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? `md:me-3 lg:me-5 p-1 hover:cursor-pointer rounded text-white`
                    :
                    `md:me-3 lg:me-5 p-1 hover:cursor-pointer  rounded`
                }
                to='/profile'>
                {
                  user?.photoURL ?
                    <div className="avatar">
                      <div className="w-6  md:w-7 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                    :
                    'Profile'
                }
              </NavLink>
            </li>
            <li onClick={toggleTheme} className='md:me-3 lg:me-5 p-1 hover:cursor-pointer hover:bg-gray-100' >
              {
                theme === 'dark' ?
                  <MdLightMode />
                  :
                  <MdDarkMode />
              }
            </li>
          </ul>



      }



    </nav>




  );
};

export default Header;

{/* <ul >



<li>
  <a onClick={toggleTheme}>
    {
      theme === 'dark' ?

        <MdLightMode />
        :
        <MdDarkMode />


    }
  </a>
</li>

</ul> */}