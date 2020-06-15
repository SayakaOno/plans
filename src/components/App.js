import React from 'react';
import moment from 'moment';
import { Layout, Tabs, Row, Button, DatePicker } from 'antd';
import MainTarget from './MainTarget';
import ToDo from './ToDo';
import GenreDetail from './GenreDetail';
import './App.css';

const App = () => {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: 50 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="TODO" key="1">
            <ToDo />
          </TabPane>
          <TabPane tab="Progress" key="2">
            <MainTarget />
            <GenreDetail />
          </TabPane>
          <TabPane tab="Settings" key="3">
            Settings
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default App;
