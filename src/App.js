// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const products = [
  {
    id: 1,
    title: 'The Secret Garden',
    description: 'The Secret Garden is a novel by Frances Hodgson Burnett first published in 1911.',
    category: 'Children\'s Literature',
    price: '$10',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'The Great Gatsby',
    description: 'The Great Gatsby is a novel by F. ',
    category: 'Classic Literature',
    price: '$15',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960.',
    category: 'Classic Literature',
    price: '$12',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: '1984',
    description: '1984 is a dystopian novel by George Orwell published in 1949.',
    category: 'Science Fiction',
    price: '$18',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    description: 'Pride and Prejudice is a novel by Jane Austen published in 1813.',
    category: 'Classic Literature',
    price: '$14',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    description: 'The Catcher in the Rye is a novel by J.D. Salinger published in 1951. ',
    category: 'Modern Literature',
    price: '$20',
    image: 'https://via.placeholder.com/300',
  },
];

function App() {
    return (
        <Router>
          <Navbar />
          <Routes>
    
            <Route exact path="/" Component={(props) => <HomePage {...props} products={products} />} />
            <Route path="/product/:id" Component = {(props) => <DetailPage {...props} products={products} />} />

            </Routes>
          
        </Router>
    );
}

export default App;
