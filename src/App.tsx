import { ConfigProvider } from 'antd';
import React, { Component } from 'react';
import ptBr from 'antd/es/locale/pt_BR';
import Router from './Router';

class App extends Component {
  render () {
    return (
      <ConfigProvider locale={ptBr}>
        <Router />
      </ConfigProvider>
    )
  }
}

export default App
