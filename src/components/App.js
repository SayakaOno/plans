import React from 'react';
import moment from 'moment';
import { Layout, Row, Button, DatePicker } from 'antd';
import MainTarget from './MainTarget';
import ToDo from './ToDo';
import './App.css';

const App = () => {
  const { Content } = Layout;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: 50 }}>
        <MainTarget />
        <ToDo />
      </Content>
    </Layout>
  );
};

export default App;
