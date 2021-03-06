import React from 'react';
import { List, ListItem } from '@paljs/ui/List';
import { Card } from '@paljs/ui/Card';

export default function Basic() {
  const fruits = [
    'Lemons',
    'Raspberries',
    'Strawberries',
    'Blackberries',
    'Kiwis',
    'Grapefruit',
    'Avocado',
    'Watermelon',
    'Cantaloupe',
    'Oranges',
    'Peaches',
  ];
  return (
    <Card style={{ maxWidth: '20rem', margin: '0 auto' }} size="Medium">
      <header>Fruit List</header>
      <List>
        {fruits.map((fruit, index) => (
          <ListItem key={index}>{fruit}</ListItem>
        ))}
      </List>
    </Card>
  );
}
