import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='Parentbox'>
      <FotoProduk/>
      <ProdukInfo name="Nike Free" category="SNEAKER" price="24000000"/>
      
    </div>
  );
}

function FotoProduk(){
  return(
    <div className='Foto'>
      <img src='sneaker.jpg'/>
    </div>
  )
}

function ProdukInfo(props){
  const{category, name, price} = props;
  return(
    <div className='Deskripsi'>
      <p className='Cate'>{category}</p>
      <h1 className='Title'>{name}</h1>
      <p className='Price'>IDR {price}</p>
      <p className='Info'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <a href='#' onClick={(e) => TambahCart(name, e)}>Add to Cart</a>
    </div>
  )
}

function TambahCart(e){
  console.log('Membeli ' + e);
}

export default App;
