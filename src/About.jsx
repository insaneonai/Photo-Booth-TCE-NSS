export default function AboutUs(){
    return (
        <div height="100vh" width="100vw" style={{textAlign: "center"}}>
            <div style={{display: "flex", justifyContent: "left", padding: "10px 0px 0px 15px"}}>
                <button>
                <a href="/">Back To Website 🔙</a>
                </button>
            </div>
            <h1>Nanga Thaan Sokars Squad 🏢⚒️🧑‍🏭</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src="/public/about-us.jpg" style={{height: "70vh"}} alt="About us"/>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                <h4>Team Members!</h4>
                <ul>
                    <li><p style={{textAlign: "left", padding: "0px", margin: "0px"}}>Jeyadevan P K</p></li>
                    <li><p style={{textAlign: "left", padding: "0px", margin: "0px"}}>Pradeep SS</p></li>
                    <li><p style={{textAlign: "left", padding: "0px", margin: "0px"}}>Kaushik Ram</p></li>
                    <li><p style={{textAlign: "left", padding: "0px", margin: "0px"}}>Thayumanavan</p></li>
                </ul>
            </div>
        </div>
    )
}