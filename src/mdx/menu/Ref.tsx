import React, { useRef } from 'react';
import { Button } from '@paljs/ui/Button';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import { MenuItemType } from '@paljs/ui/types';
import { Card, CardBody } from '@paljs/ui/Card';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

const getPathReady = (path: string) => {
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

function Ref() {
  const menuRef = useRef<MenuRefObject>(null);
  const items: MenuItemType[] = [
    {
      title: 'Guides',
      children: [
        {
          title: 'Start new project',
          link: { to: '/guides/start-new-project' }, // goes into @reach/router `router Link`
        },
        {
          title: 'Github Repository',
          url: 'https://github.com/paljs/ui', // goes directly into `href` attribute
        },
      ],
    },
    {
      title: 'Components',
      children: [
        {
          title: 'Navigation',
          group: true,
        },
        {
          title: 'Menu',
          link: { to: '/components/menu' }, // selected link
        },
      ],
    },
  ];
  return (
    <Card style={{ maxWidth: '20rem', margin: '0 auto' }}>
      <header>
        <Button fullWidth onClick={() => menuRef.current?.toggle()}>
          toggle menu
        </Button>
      </header>
      <CardBody>
        <Location>
          {({ location }) => (
            <Menu ref={menuRef} currentPath={getPathReady(location.pathname)} items={items} Link={Link} />
          )}
        </Location>
      </CardBody>
    </Card>
  );
}

export default Ref;
