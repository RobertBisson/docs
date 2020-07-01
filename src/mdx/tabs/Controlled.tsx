import React, { useState } from 'react';
import { Tabs, Tab } from '@paljs/ui/Tabs';
import { Card } from '@paljs/ui/Card';

function Controlled() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Card>
      <Tabs onSelect={(i) => setActiveIndex(i)} activeIndex={activeIndex}>
        <Tab title="Tab 1">
          <h1>Content 1</h1>
        </Tab>
        <Tab title="Tab 2">
          <h1>Content 2</h1>
        </Tab>
        <Tab title="Tab 3">
          <h1>Content 3 </h1>
        </Tab>
      </Tabs>
    </Card>
  );
}

export default Controlled;
