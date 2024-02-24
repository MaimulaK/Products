const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <div>
        <h1>Soki_Iz_Ekvadora</h1>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
