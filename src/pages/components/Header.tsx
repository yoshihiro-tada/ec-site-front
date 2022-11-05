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
            <Box style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#FFFAF0' }}>
              <h1 style={{ marginTop: 8, marginBottom: 0, marginLeft: 8 }} >
                <Link href="/">
                  <Image src="/images/h-logo.png" width={104} height={27} alt="shop logo" />
                </Link>
              </h1>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Box>
          </AppBar>;
}

export default Header;