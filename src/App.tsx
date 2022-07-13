import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { NewTransactionModal } from "./components/NewTransactionmodal";
import { TransactionsProvider } from './hooks/useTransactions';

import Modal from "react-modal";

Modal.setAppElement('#root')

export function App() {
  const [inNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
        <NewTransactionModal
         isOpen={inNewTransactionModalOpen}
         onRequestClose={handleCloseNewTransactionModal}
         />
      <GlobalStyle />
        
    </TransactionsProvider>
  );
}


