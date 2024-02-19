// DetailPage.js
import React from 'react';

import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'The Secret Garden',
    description: 'The Secret Garden is a novel by Frances Hodgson Burnett first published in 1911. It tells the story of Mary Lennox, a young orphan who is sent to live with her uncle in Yorkshire, England, after her parents die in India. Mary discovers a hidden garden on her uncle\'s estate, which she restores to its former glory with the help of her cousin and a young gardener. As the garden blooms, so do the lives of those who tend to it, bringing healing and renewal to all.',
    category: 'Children\'s Literature',
    price: '$10',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'The Great Gatsby',
    description: 'The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. Set in the summer of 1922, the story is narrated by Nick Carraway, a young man who moves to Long Island and becomes entangled in the lives of his wealthy neighbors, including the mysterious Jay Gatsby. Through Nick\'s eyes, we witness the extravagance and excess of the Jazz Age, as well as the disillusionment and moral decay that lie beneath the surface.',
    category: 'Classic Literature',
    price: '$15',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Set in the fictional town of Maycomb, Alabama, during the Great Depression, the story is told through the eyes of Scout Finch, a young girl who grows up alongside her brother Jem and their father Atticus, a lawyer. The novel explores themes of racial injustice, moral growth, and the loss of innocence, as Scout and Jem come of age and learn valuable lessons about empathy and compassion.',
    category: 'Classic Literature',
    price: '$12',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: '1984',
    description: '1984 is a dystopian novel by George Orwell published in 1949. Set in a totalitarian regime ruled by the Party and its leader, Big Brother, the story follows Winston Smith, a low-ranking member of the Party who begins to rebel against the oppressive government. As Winston navigates the dangers of thoughtcrime and surveillance, he becomes involved in a forbidden love affair and seeks to find truth and freedom in a world dominated by lies and control.',
    category: 'Science Fiction',
    price: '$18',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    description: 'Pride and Prejudice is a novel by Jane Austen published in 1813. Set in rural England during the early 19th century, the story follows the romantic adventures of the Bennet sisters, particularly Elizabeth Bennet, as they navigate the social conventions and expectations of their time. At its heart, Pride and Prejudice is a tale of love, marriage, and the complexities of human relationships, with Austen\'s sharp wit and keen insight into human nature shining through.',
    category: 'Classic Literature',
    price: '$14',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    description: 'The Catcher in the Rye is a novel by J.D. Salinger published in 1951. Narrated by Holden Caulfield, a disillusioned teenager expelled from prep school, the story follows Holden\'s journey through New York City as he grapples with issues of identity, authenticity, and the hypocrisy of the adult world. Often regarded as a classic of adolescent literature, The Catcher in the Rye continues to resonate with readers for its portrayal of teenage angst and rebellion.',
    category: 'Modern Literature',
    price: '$20',
    image: 'https://via.placeholder.com/300',
  },


];


const DetailPage = () => {
  let { id } = useParams();
  const product = products.find(product => product.id === parseInt(id))
    

  return (
    <div className="max-w-2xl mx-auto p-4">
    <header className="text-2xl font-bold mb-4">Product Detail</header>
    <p className="mb-2"><span className="font-semibold">Title:</span> {product.title}</p>
    <p className="mb-2"><span className="font-semibold">Description:</span> {product.description}</p>
    <p className="mb-2"><span className="font-semibold">Category:</span> {product.category}</p>
    <p className="mb-2"><span className="font-semibold">Price:</span> {product.price}</p>
    <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md" />
  </div>
  );
};

export default DetailPage;
