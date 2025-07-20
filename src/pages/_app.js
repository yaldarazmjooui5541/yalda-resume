import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
