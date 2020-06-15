import React, { useEffect } from 'react';
import {
  Card,
  Statistic,
  Row,
  Col,
  Progress,
  Collapse,
  Divider,
  Checkbox
} from 'antd';
import { Chart } from '@antv/g2';
const { Panel } = Collapse;

const GenreDetail = props => {
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
      container: 'genre1',
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
    <Card id="genre-detail" style={{ width: '100%' }}>
      <h1>カテゴリー1</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="持ち時間" value="300" />
        </Col>
        <Col span={12}>
          <Statistic title="所要時間" value="203:20" />
        </Col>
      </Row>
      <div id="genre1" />
      <div className="task">
        <Divider />
        <Row gutter={16}>
          <Col span={6}>
            <div style={{ width: '80%', marginBottom: 20 }}>
              <h2>GraphQL</h2>
              <Progress percent={30} />
            </div>
            <Collapse expandIconPosition="right">
              <Panel header="This is panel header 1" key="1">
                <ul>
                  <li>
                    <Checkbox checked={true} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={true} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={true} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={false} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={false} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={false} />
                    task1
                  </li>
                </ul>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <ul>
                  <li>
                    <Checkbox checked={true} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={true} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={true} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={false} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={false} />
                    task1
                  </li>
                  <li>
                    <Checkbox checked={false} />
                    task1
                  </li>
                </ul>
              </Panel>
            </Collapse>
          </Col>
          <Col span={4}>
            <Statistic title="完了" value="300 / 400" />
          </Col>
          <Col span={4}>
            <Statistic title="目安" value="203:20" />
          </Col>
          <Col span={4}>
            <Statistic title="完了目標" value="12月30日" />
          </Col>
          <Col span={4}>
            <Statistic title="完了見込" value="12月30日" />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default GenreDetail;
