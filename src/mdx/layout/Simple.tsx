import React from 'react';
import {
  Layout,
  LayoutHeader,
  LayoutColumns,
  LayoutColumn,
  LayoutContainer,
  LayoutContent,
  LayoutFooter,
} from '@paljs/ui';
import styled from 'styled-components';
const SimpleStyle = styled.div`
  height: 50vh;
  overflow: hidden;
  .first {
    background-color: #edeef7;
  }
  .second {
    background-color: #f4f4f7;
  }
  .height {
    max-height: calc(50vh - 4.75rem);
  }
`;
export default function Simple() {
  return (
    <SimpleStyle>
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <LayoutContainer>
          <LayoutContent className="height">
            <LayoutColumns>
              <LayoutColumn className="first">first column</LayoutColumn>
              <LayoutColumn className="second">second column</LayoutColumn>
            </LayoutColumns>
            <LayoutFooter>Footer</LayoutFooter>
          </LayoutContent>
        </LayoutContainer>
      </Layout>
    </SimpleStyle>
  );
}
