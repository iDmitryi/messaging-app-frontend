import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {
  Chat,
  MoreVert,
  DonutLarge,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
        <div className="sidebar__headerRight">
          <Button>
            <DonutLarge />
          </Button>
          <Button>
            <Chat />
          </Button>
          <Button>
            <MoreVert />
          </Button>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};
export default Sidebar;
