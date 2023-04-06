const [done, setDone] = useState(undefined);
const App = () =>
{
  const [load,setLoad] = useState('');
  const [done, setDone] = useState(undefined);
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
   getLoad(); }, []);

  const getLoad = () => {
    setDone(undefined);
    setLoading(undefined);


    setTimeout(() => {
      fetch('')
      .then(res => res.json())
      .then(data => {
        setLoad(data.file);
        setLoading(true);
        setTimeout(() => {
          setDone(true);
        }, 1000);
    });
  }, 1200);
}
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Loading = ({loading}) => {
console.log(loading);
return(
  <div style={{marginTop: 10}}>
    <Lottie 
      options={defaultOptions}
      height={400}
      width={400}
    />
  </div>
)
}




<div>
          {!done ? (
            <Loading Loading={loading}/>
          ) : (
            <img src="megaphone.png"></img>
          )}
        </div>