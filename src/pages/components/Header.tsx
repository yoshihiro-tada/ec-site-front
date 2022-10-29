import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@material-ui/core'
import Image from 'next/image'

const theme = {
  spacing: 4,
}

function Header() {
  return  <AppBar>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#FFFAF0' }}>
              <h1 sx={{ marginLeft: 1 }} >
                <Image src="/images/h-logo.png" width={104} height={27} alt="shop logo" />
              </h1>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Box>
          </AppBar>;
}

export default Header;