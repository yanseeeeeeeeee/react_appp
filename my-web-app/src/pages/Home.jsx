export default function Home() {
    function sendApp(){
        window.ReactNativeWebView?.postMessage(
            JSON.stringify({
                type:"test",
                message:"привеет с сайта"
            })
        );
    }

    return (
        <div>
            <h1>Home</h1>

            <button onClick={sendApp}>
                Отправляем
            </button>
        </div>
    );
}