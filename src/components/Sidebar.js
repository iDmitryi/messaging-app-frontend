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
import { useStateValue } from "../store/StateProvider";

const Sidebar = ({ messages }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
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
        <SidebarChat messages={messages} />
      </div>
    </div>
  );
};
export default Sidebar;
