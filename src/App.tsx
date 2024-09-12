import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./Lottie/Animation.json";
import { Main } from "./Components/Main/Main";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <Lottie animationData={animationData} />
                </div>
            ) : (
                <Main />
            )}
        </div>
    );
}

export default App;
