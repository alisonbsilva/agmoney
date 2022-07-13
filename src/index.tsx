import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },
  
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title: 'Freelance do website',
          type:'deposit',
          category: 'Dev',
          amount:6000,
          createdAt: new Date("2022-07-31 18:29:00")

        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 700,
          createdAt: new Date("2022-06-31 15:29:00")

        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction')
    })
    this.post('/transaction', (schema, request) => { 
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);