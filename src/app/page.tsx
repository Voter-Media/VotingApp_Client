import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

import React from 'react'

const Home = () => {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Candidates</NavigationMenuLink>
          <NavigationMenuLink>Register</NavigationMenuLink>
          <NavigationMenuLink>VoterList</NavigationMenuLink>
          <NavigationMenuLink>VoterID</NavigationMenuLink>
          <NavigationMenuLink>Login</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  
  )
}

export default Home;
