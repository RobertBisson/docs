import React from 'react';
import { Card, CardBody, Progress } from '@paljs/ui';
import { status } from '../shared';

function Status() {
  const style = { marginBottom: '1rem' };
  return (
    <Card>
      <header>Progress Bar Status</header>
      <CardBody>
        {status.map((key, index) => (
          <Progress key={key} style={style} value={(index + 1) * 20} status={key}>
            {key}
          </Progress>
        ))}
      </CardBody>
    </Card>
  );
}

export default Status;
