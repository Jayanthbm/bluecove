import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
