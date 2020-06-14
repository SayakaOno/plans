import React, { useEffect } from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import { Chart } from '@antv/g2';

const MainTarget = props => {
  useEffect(() => {
    const data = [
      { mainCategory: '', genre: 'カテゴリー1', value: 30 },
      { mainCategory: '', genre: 'カテゴリー2', value: 20 },
      { mainCategory: '', genre: 'カテゴリー3', value: 20 },
      { mainCategory: '', genre: 'カテゴリー4', value: 10 },
      { mainCategory: '', genre: 'カテゴリー5', value: 5 },
      { mainCategory: '', genre: 'カテゴリー6', value: 15 }
    ];

    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 100
    });
    chart.data(data);
    chart.scale('value', {
      alias: ' '
    });
    chart.axis('mainCategory', {
      tickLine: null,
      line: null
    });
    chart.axis('value', {
      label: null,
      title: {
        style: {
          fontSize: 14,
          fontWeight: 300
        }
      },
      grid: null
    });
    chart.legend({
      position: 'bottom'
    });
    chart.coordinate('rect').transpose();
    chart.tooltip({
      shared: true,
      showMarkers: false
    });
    chart.interaction('active-region');
    chart
      .interval()
      .adjust('stack')
      .position('mainCategory*value')
      .color('genre*mainCategory', (genre, mainCategory) => {
        if (genre === 'カテゴリー1') {
          return '#1890ff';
        }
        if (genre === 'カテゴリー2') {
          return '#1AF054';
        }
        if (genre === 'カテゴリー3') {
          return '#F0E61A';
        }
        if (genre === 'カテゴリー4') {
          return '#F76A0C';
        }
        if (genre === 'カテゴリー5') {
          return '#D300E0';
        }
        if (genre === 'カテゴリー6') {
          return '#0C66F7';
        }
        if (genre === 'カテゴリー1' && mainCategory === '中国（北京）') {
          return '#1AF054';
        }
      })
      .size(26)
      .label('value*genre', (val, t) => {
        const color = t === 'カテゴリー1' ? 'white' : '#47494b';
        if (val < 0.05) {
          return null;
        }
        return {
          position: 'middle',
          offset: 0,
          style: {
            fontSize: 12,
            fill: color,
            lineWidth: 0,
            stroke: null,
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        };
      });
    chart.render();
  });
  return (
    <Card id="main-target" style={{ width: '100%' }}>
      <h1>メイン</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="持ち時間" value="300" />
        </Col>
        <Col span={12}>
          <Statistic title="所要時間" value="203:20" />
        </Col>
      </Row>
      <div id="container" />
    </Card>
  );
};

export default MainTarget;
