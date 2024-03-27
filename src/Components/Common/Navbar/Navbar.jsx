import React from 'react';
import './navbar.css';
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header>
        <nav>
          <label htmlFor="logo" className="icon">
            School
          </label>
          <ul className="nav_ul">
            <li>
              <a href="" className="menu_link">
                About
              </a>
            </li>
            <li>
              <a href="" className="menu_link">
                Our Team
              </a>
            </li>
            <li>
              <a href="" className="menu_link">
                Gallery
              </a>
            </li>
            <li>
              <a href="" className="menu_link">
                News
              </a>
            </li>
            <li>
              <a href="" className="menu_link">
                Contact
              </a>
            </li>
            <li>
              <a href="" className="menu_link">
                Routine
              </a>
            </li>
            <li>
              <a href="" className="menu_link">
                Blog
              </a>
            </li>
            <li className="menu_link">
              {' '}
              <ColorModeSwitcher />
            </li>
            <li className="menu_btn">
              <Button onClick={onOpen}>
                <i className="fa-solid fa-bars"></i>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>School</DrawerHeader>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>About</Link>
            </Button>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>Our Team</Link>
            </Button>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>Gallery</Link>
            </Button>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>News</Link>
            </Button>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>Contact</Link>
            </Button>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>Routine</Link>
            </Button>
            <Button onClick={onClose} variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>Blog</Link>
            </Button>{' '}
            <Button variant={'dark'} colorScheme={'dark'}>
              <Link to={'/videos?category=free'}>
                <ColorModeSwitcher />
              </Link>
            </Button>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default Navbar;
