import Navbar from '../components/Navbar';
import { AlgoProvider } from '../provider/context';
import '../styles/globals.css';




function MyApp({ Component, pageProps }) {
  return (
   
      <AlgoProvider>
     <Navbar>
     <Component {...pageProps} />
   </Navbar>
    
  </AlgoProvider>

  
  
  
    
  
  
  
  );
}

export default MyApp
