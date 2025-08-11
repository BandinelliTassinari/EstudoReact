import { Layout, Row, Col, Button, Input, Divider } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  ProfileTwoTone,
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import Globo100 from '../assets/Globo100.svg.png';
import GloboCom from '../assets/GloboCom.png';

const { Header } = Layout;

const GloboHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: '0 20px', height: isMobile ? 50 : 42, position: 'relative' }}>
        <Row align="middle" justify="space-between">
          <Col flex="32px" />
          {/* Esquerda */}
          <Col>
            <Row align="left" gutter={16}>
              <Col>
                <Button icon={<ProfileTwoTone />} variant="text">Menu</Button>
              </Col>
            </Row>
          </Col>

          {/* Centro */}
          <Col style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <Row align="middle" gutter={16} style={{ minWidth: isMobile ? 200 : 320 }}>
              <Col>
                <button style={{ border: 'none', background: 'none', cursor: 'pointer', margin: '40px 0' }}>
                    <img src={GloboCom} alt="Globo.com" style={{ width: isMobile ? '60px' : '120px', height: 'auto' }} />
                  </button>
              </Col>
              {!isMobile && (
                <Col>
                  <Divider type="vertical" style={{ height: 40, borderLeft: '2px solid #ADD8E6', margin: '0px' }} />
                </Col>
              )}
              {!isMobile && (
                <Col>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer', margin: '40px 0' }}>
                    <img src={Globo100} alt="100 anos de Globo" style={{ width: isMobile ? '60px' : '70px', height: 'auto' }} />
                  </button>
                </Col>
              )}
            </Row>
          </Col>

          {/* Direita */}
          <Col>
            <Row align="middle" gutter={16}>
              {!isMobile && (
                <Col>
                  <Button
                    icon={<UserOutlined style={{ color: '#0073e6', fontSize: 20 }}/>}
                    style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    iconPosition={'end'}
                  >
                    Conta Globo
                  </Button>
                </Col>
              )}
              <Divider type="vertical" style={{ height: isMobile ? 40 : 56 }} />
              <Col>
                <Row align="middle" gutter={4}>
                  <Input
                    placeholder="Busca"
                    style={{ width: isMobile ? 70 : 90, height: 28, fontSize: 14 }}
                    size="small"
                  />
                  {/* icone de busca */}
                  <Button
                    type="circle"
                    icon={<SearchOutlined style={{ color: '#0073e6', fontSize: 20 }} />}
                    iconPosition="end"
                    size="small"
                    style={{ marginLeft: 4 }}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col flex="32px" />
        </Row>
      </Header>
    </Layout>
  );
};

export default GloboHeader;
