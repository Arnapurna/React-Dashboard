import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { DiVisualstudio } from "react-icons/di";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Navigation = (props) => {
  console.log("props", props);
  // const [notificationCount, setNotificationCount] = useState(0);
  // // Notification count update
  // const simulateNotification = () => {
  //   const randomCount = Math.floor(Math.random() * 10) + 1;
  //   setNotificationCount(randomCount);
  // };
  const [open,setOpen]=useState(false);
  const handleOpen=()=> setOpen(true);
  const handleClose=()=> setOpen(false)
  return (
    <>
      {/* <Navbar
        expand=""
        variant="dark"
        className="container-fluid mb-3 mx-0 p-2"
        bg="dark"
      >
        <Navbar.Brand className="mx-auto">{props.title}</Navbar.Brand>
      </Navbar> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid ps-0 d-flex justify-content-between">
        <form class="d-flex flex-row">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary"  onClick={handleOpen} >
        <MailIcon style={{color:"#fff"}} />
      </Badge>
      <Badge badgeContent={4} color="success">
        <NotificationsIcon style={{color:"#fff"}} />
      </Badge>
      <Badge badgeContent={2} color="secondary">
        <ChatBubbleIcon style={{color:"#fff"}} />
      </Badge>
      <Badge>
        <SettingsIcon style={{color:"#fff"}} />
      </Badge>
      <Badge>
        <AccountCircleIcon style={{color:"#fff"}} />
      </Badge>
    </Stack>
        {/* <ul
          class="navbar-nav 
        mb-lg-0 
        d-flex flex-row"
        >
          <li class="nav-item me-3">
            <IoMdNotifications
              size={30}
              onClick={simulateNotification}
              style={{ color: "white" }}
            />
            <span  style={{ color: "white" }}>{notificationCount}</span>
          </li>
          <li class="nav-item me-3">
            <BiUserCircle 
              size={30}
              onClick={simulateNotification}
              style={{ color: "white" }}
            />
          </li>
          <li class="nav-item me-3">
            <IoChatbubbleOutline 
              size={30}
              onClick={simulateNotification}
              style={{ color: "white" }}
            />
          </li>
          <li class="nav-item me-3">
            <FaRegCommentAlt 
              size={30}
              onClick={simulateNotification}
              style={{ color: "white" }}
            />
          </li>
          <li class="nav-item me-3">
            <BsGear 
              size={30}
              onClick={simulateNotification}
              style={{ color: "white" }}
            />
          </li>
        </ul> */}

        {/* <Navbar.Brand className="mx-auto">{props.title}</Navbar.Brand> */}
      </nav>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Message Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </>
  );
};

export default Navigation;
