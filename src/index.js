import React from 'react';
import ReactDOM from 'react-dom/client';
import { ObyektProvider } from "./companents/state";
import
 {useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider, } from "react-query";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ObyektProvider>
          <App />
        </ObyektProvider>
      </BrowserRouter>   
    </QueryClientProvider>
  </React.StrictMode>
);


