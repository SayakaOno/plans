import React, { useState, useEffect } from 'react';
import { Card, Table, Row, Tag } from 'antd';

const data = [
  {
    key: '1',
    todo: 'todo1',
    genre: 'カテゴリー1',
    eta: '30:00',
    completed: '0:00',
    estimatedCompletion: '30:00',
    idealCompletion: '30:00'
  },
  {
    key: '2',
    todo: 'todo2',
    genre: 'カテゴリー2',
    eta: '40:00',
    completed: '0:00',
    estimatedCompletion: '30:00',
    idealCompletion: '30:00'
  },
  {
    key: '3',
    todo: 'todo3',
    genre: 'カテゴリー3',
    eta: '50:00',
    completed: '0:00',
    estimatedCompletion: '30:00',
    idealCompletion: '30:00'
  },
  {
    key: '4',
    todo: 'todo4',
    genre: 'カテゴリー4',
    eta: '60:00',
    completed: '0:00',
    estimatedCompletion: '30:00',
    idealCompletion: '30:00'
  }
];

const ToDo = props => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  useEffect(() => {});
  const columns = [
    {
      title: 'ToDo',
      dataIndex: 'genre',
      key: 'genre',
      filters: [
        { text: 'カテゴリー1', value: 'カテゴリー1' },
        { text: 'カテゴリー2', value: 'カテゴリー2' }
      ],
      filteredValue: filteredInfo.genre || null,
      onFilter: (value, record) => record.genre.includes(value),
      ellipsis: true,
      render: (genre, data) => {
        return (
          <>
            <span style={{ display: 'inline-block', marginRight: 10 }}>
              {data.todo}
            </span>
            <Tag color="blue" key={genre}>
              {genre}
            </Tag>
          </>
        );
      }
    },
    {
      title: '所要時間',
      dataIndex: 'eta',
      key: 'eta',
      sorter: (a, b) => a.eta - b.eta,
      sortOrder: sortedInfo.columnKey === 'eta' && sortedInfo.order,
      ellipsis: true
    },
    {
      title: '完了',
      dataIndex: 'completed',
      key: 'completed',
      sorter: (a, b) => a.completed - b.completed,
      sortOrder: sortedInfo.columnKey === 'completed' && sortedInfo.order,
      ellipsis: true
    },
    {
      title: '完了予定時間',
      dataIndex: 'estimatedCompletion',
      key: 'estimatedCompletion',
      sorter: (a, b) => a.estimatedCompletion - b.estimatedCompletion,
      sortOrder:
        sortedInfo.columnKey === 'estimatedCompletion' && sortedInfo.order,
      ellipsis: true
    },
    {
      title: '理想完了時間',
      dataIndex: 'idealCompletion',
      key: 'idealCompletion',
      sorter: (a, b) => a.idealCompletion - b.idealCompletion,
      sortOrder: sortedInfo.columnKey === 'idealCompletion' && sortedInfo.order,
      ellipsis: true
    }
  ];
  return (
    <Card id="todos" style={{ width: '100%' }}>
      <h1>ToDo</h1>
      <Row gutter={16}>
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={false}
        />
      </Row>
    </Card>
  );
};

export default ToDo;
