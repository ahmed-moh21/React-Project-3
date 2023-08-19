import React,{useEffect,useState} from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './component/Error';
import ImageCard from './component/imageCard';
import ImageSearch from './component/ImageSearch';

function App() {
   
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect( () => {
      fetch(`https://pixabay.com/api/?key=25762454-07fe6c11dd48cf3ab7062287f&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false)
      })
      .catch (err => console.log(err));
    },[term]);

    return(
      <div className='App'>
        <div>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <Error />}

        </div>
        <div className='test'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    );
}

export default App;
