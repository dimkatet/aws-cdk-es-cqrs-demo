/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';
import './index.css';
import Params from '../../backend/cdk-outputs.json';

Amplify.configure({
  aws_appsync_region: Params.BackendStack.StackRegion,
  aws_appsync_graphqlEndpoint: Params.BackendStack.GraphQLAPIURL,
  aws_appsync_authenticationType: 'API_KEY', //Primary AWS AppSync authentication type
  aws_appsync_apiKey: Params.BackendStack.GraphQLAPIKey,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
