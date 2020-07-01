import React, { useState, useEffect } from 'react';
import Progress  from '@paljs/ui/ProgressBar';
import { Status }  from '@paljs/ui/types';
import { Card, CardBody } from '@paljs/ui/Card';
import { Actions } from '@paljs/ui/Actions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;
function Interactive() {
  const [value, setValue] = useState(25);
  const [status, setStatus] = useState<Status>('Danger');

  useEffect(() => {
    if (value <= 25) {
      setStatus('Danger');
    } else if (value <= 50) {
      setStatus('Warning');
    } else if (value <= 75) {
      setStatus('Info');
    } else {
      setStatus('Success');
    }
  }, [value]);

  const setProgressValue = (newValue: number) => {
    setValue(Math.min(Math.max(newValue, 0), 100));
  };
  return (
    <Card>
      <header>Progress Bar Interactive</header>
      <CardBody>
        <Container>
          <Actions
            size="Medium"
            actions={[
              {
                icon: 'arrow-down',
                url: { onClick: () => setProgressValue(value - 25) },
              },
            ]}
          />
          <Progress className="bar" value={value} status={status} displayValue />
          <Actions
            size="Medium"
            actions={[
              {
                icon: 'arrow-up',
                url: { onClick: () => setProgressValue(value + 25) },
              },
            ]}
          />
        </Container>
      </CardBody>
    </Card>
  );
}

export default Interactive;
