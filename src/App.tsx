import Router from './router';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/apollo-client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
