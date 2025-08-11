import React from 'react';
import { Row, Col, Menu } from 'antd';
import { useMediaQuery } from 'react-responsive';

const GloboSubHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const menuItems = [
    { key: 'g1', label: 'g1', color: 'red' },
    { key: 'o-globo', label: 'o globo', color: 'blue' },
    { key: 'valor', label: 'valor', color: '#006400' },
    { key: 'ge', label: 'ge', color: 'green' },
    { key: 'cartola', label: 'cartola', color: 'orange' },
    { key: 'globoplay', label: 'globoplay', color: '#FF1493' },
    { key: 'gshow', label: 'gshow', color: 'orange' },
    { key: 'receitas', label: 'receitas', color: '#FF00FF' },
    { key: 'quem', label: 'quem', color: '#696969' },
    { key: 'g1-jogos', label: 'g1 jogos', color: 'red' },
  ];

  return (
    <Row justify="center" wrap style={{ background: '#fff', padding: isMobile ? '1px 10px' : '10px 20px' }}>
      <Col xs={24} sm={24} md="auto">
        <Menu
          mode="horizontal"
          style={{
            background: 'transparent',
            borderBottom: 'none',
            fontWeight: 'bold',
            fontSize: isMobile ? 12 : 14,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {menuItems.map(item => (
            <Menu.Item key={item.key} style={{ color: item.color }}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  );
};

export default GloboSubHeader;
