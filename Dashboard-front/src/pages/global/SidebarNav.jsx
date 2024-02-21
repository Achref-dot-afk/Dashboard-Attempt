import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {theme} from '../../theme'
import { useSelector } from 'react-redux';
function SidebarNav() {
  const { collapseSidebar } = useProSidebar();
  const isDark = useSelector(state => state.isDark);
  const darkTheme = theme('dark');

  return (
    <div id="sidebar" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar backgroundColor={isDark.isDark ? darkTheme.palette.primary.sec : ''} style={{ height: "100vh"}}>
        <Menu>
          <MenuItem id="item" className="text-center"
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{color: isDark.isDark ? 'white' : ''}}
          >
            {" "}
            <h2 style={{color: isDark.isDark ? 'white' : ''}}>Admin</h2>
          </MenuItem>

          <MenuItem id="item" style={{color: isDark.isDark ? 'white' : ''}} icon={<HomeOutlinedIcon style={{color: isDark.isDark ? 'white' : ''}}/>}>Home</MenuItem>
          <MenuItem id="item" style={{color: isDark.isDark ? 'white' : ''}} icon={<PeopleOutlinedIcon style={{color: isDark.isDark ? 'white' : ''}}/>}>Team</MenuItem>
          <MenuItem id="item" style={{color: isDark.isDark ? 'white' : ''}} icon={<ContactsOutlinedIcon style={{color: isDark.isDark ? 'white' : ''}}/>}>Contacts</MenuItem>
          <MenuItem id="item" style={{color: isDark.isDark ? 'white' : ''}} icon={<ReceiptOutlinedIcon style={{color: isDark.isDark ? 'white' : ''}}/>}>Profile</MenuItem>
          <MenuItem id="item" style={{color: isDark.isDark ? 'white' : ''}} icon={<HelpOutlineOutlinedIcon style={{color: isDark.isDark ? 'white' : ''}}/>}>FAQ</MenuItem>
          <MenuItem id="item" style={{color: isDark.isDark ? 'white' : ''}} icon={<CalendarTodayOutlinedIcon style={{color: isDark.isDark ? 'white' : ''}}/>}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      </div>
  );
}
export default SidebarNav;