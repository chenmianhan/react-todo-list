import React from 'react';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import OnlyTodoListContainer from './containers/OnlyTodoContainer';
import { HashRouter, Route, Link } from 'react-router-dom';
import DoneListContainer from "./containers/DoneListContainer";
import { Layout,Menu } from 'antd';
import { CopyOutlined,CheckOutlined,ClockCircleOutlined } from '@ant-design/icons';
const { Footer, Sider, Content } = Layout;
function App() {
  return (
    <HashRouter>
      <Layout>
        <Sider>
        <Menu mode="vertical">
        <Menu.Item key="/" icon={<CopyOutlined />}>
        <Link to='/'>all to do</Link>
        </Menu.Item>
        <Menu.Item key="/done"  icon={<CheckOutlined />}>
        <Link to='/done'>done</Link>
        </Menu.Item>
        <Menu.Item key="/todo"  icon={<ClockCircleOutlined />}>
        <Link to='/todo'>todo</Link>
        </Menu.Item>
      </Menu>
        </Sider>
        <Layout>
          
          <Content>
            <Route path="/" component={TodoListContainer} exact />
            <Route path="/done" component={DoneListContainer} />
            <Route path="/todo" component={OnlyTodoListContainer} />
          </Content>
          <Footer><TodoFormContainer></TodoFormContainer>   </Footer>
        </Layout>
      </Layout>
    </HashRouter>
  );
}

export default App;
