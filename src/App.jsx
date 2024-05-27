import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Main } from "./Components/Main/Main";
import animationData from './Lottie/Animation.json'

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Lottie animationData={animationData}/>
                </div>
            ) : (
                <div>
                    <Main />
                </div>
            )}
        </div>
    );
}

export default App;
