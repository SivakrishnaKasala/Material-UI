import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'
import {useState} from 'react'
// import styled from "style"
import MenuIcon from '@mui/icons-material/Menu'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '32px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const UserIcons = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>
          Navbar
        </Typography>
        <MenuIcon sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search>
          <InputBase placeholder="search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailOutlineIcon color="secondary" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon color="secondary" />
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserIcons onClick={() => setOpen(true)}>
          <Typography variant="body1">User</Typography>
          <Avatar
            sx={{width: 30, height: 30}}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </UserIcons>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
export default Navbar