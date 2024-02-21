import React from 'react'
import { MdNightsStay} from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import {theme} from '../../theme'
import { useDispatch, useSelector } from 'react-redux';

const Topbar = () => {
  const dispatch = useDispatch();
  const darkTheme = theme('dark');
  const lightTheme = theme('light');
  const isDark = useSelector(state => state.isDark)
  const toggleMode = () => {
    if (isDark.isDark) {
        dispatch({ type: 'LIGHT' });
    } else {
        dispatch({ type: 'DARK' });
    }
};
  return (
    <>
      <nav className="flex justify-between p-3 items-center">
        <div className="">
          <input
            className={`outline-none rounded p-1`}
            style={{
              border: "1px solid " + darkTheme.palette.neutral.dark,
              background: isDark.isDark
                ? darkTheme.palette.neutral.dark
                : lightTheme.palette.secondary.light,
              color: !isDark.isDark
              ? darkTheme.palette.primary.main
              : lightTheme.palette.primary.main,
            }}
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-4 cursor-pointer">
          {!isDark.isDark ? (
            <MdWbSunny
              className={`text-xl transition-all w-9 h-9 p-2 text-white hover:bg-gray-400 rounded-full`}
              style={{ color: "black" }}
              onClick={toggleMode}
            />
          ) : (
            <MdNightsStay
              className="text-xl transition-all w-9 h-9 p-2 text-white hover:bg-gray-400 rounded-full"
              onClick={toggleMode}
            />
          )}
          <IoIosNotifications
            className={`text-xl transition-all w-9 h-9 p-2 ${
              isDark.isDark ? "text-white" : `${darkTheme.palette.neutral.dark}`
            } hover:bg-gray-400 rounded-full`}
          />
          <IoIosSettings
            className={`text-xl transition-all w-9 h-9 p-2 ${
              isDark.isDark ? "text-white" : `${darkTheme.palette.neutral.dark}`
            } hover:bg-gray-400 rounded-full`}
          />
          <BsFillPersonFill
            className={`text-xl transition-all w-9 h-9 p-2 ${
              isDark.isDark ? "text-white" : `${darkTheme.palette.neutral.dark}`
            } hover:bg-gray-400 rounded-full`}
          />
        </div>
      </nav>
    </>
  );
}
 
export default Topbar