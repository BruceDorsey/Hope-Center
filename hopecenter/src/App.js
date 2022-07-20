import Navbar from './components/Navbar';
import './App.css';
import './components/Navbar';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
    <div id="bannerimage">
      <img src="https://s3-alpha-sig.figma.com/img/0d16/05de/439405528dd4b404fa35aff8eb66d77a?Expires=1659312000&Signature=OW9uEdNxJkrUGcuzkXvluQTS8DrmZgYGC08P0YZZ4QNnGpXf4IhWQD5MJYgp~k1xWO0TCwnH7Dx50cSj~P2iuNbLNhJ4ZKkXM6KN2~yRafZ2zsYSNQSsbLKZDQSfJS2dfMkGAt7fZhS~ruCPHb4T2~8RT1WLnUBLWxOwTjMhzyt3fD3EKfCr3n54la-dW6pUQDEpu6yrGy2wGAP4x0nR8qLJMkG6aSqVXSlbWjuqoUS8JGS0vuwG13ygJ9ptI0wVTigTW03cUi4jPJzeJRHdAsRfdiAPK2qcOAqv~sN7txJVDjS7ck1UUSUYW65-UNiwyw5bA5pdA777gdlm69j6Wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" id="center" />
      <img src="https://s3-alpha-sig.figma.com/img/eeb7/3010/4e98a33b701b408fabe6ca8e131f22a8?Expires=1659312000&Signature=dn1lLtA7kyR~0UiDsjiwxxwn8v1LzSgIs93N-FNNRrNSPE1BlM7cgIvjp4XfSND9eJsxdXppTBnCPoN0UFJWYpHQBtDR4WwJQqImkJ3HTsKudWPr5jdHZiNRLht-Q6GylBHcud9pZmseXKknCYkE4EHwh5~fpVSPiXSlLnxnGjrCLESSZ0rrdwDwSH8auLdNJlFZSq3yEKFKqla2FjioaSTt6EBFAiyN5KoVPM1anlHJZSgf~uvAhCnz1tafTN~6WVIo~wGmRA1dTqXjX6lKPzSKdAvHE0Gl3kSqdCShC76SP8EW1PJB3pITrpGpcCGU5TdsB3KEyVCg9eAu8j8G2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" id="backarrow" />
      <h1>Welcome</h1>
      <h1>Doners</h1>
        <Navbar />
        <Sidebar/>
        <footer id="footer" > Copyright 2022
    </footer>
    </div></div>
    
  );
}

export default App;
