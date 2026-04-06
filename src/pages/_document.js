import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
    return (
        <Html lang="en">
            <style>{`
            .gradient-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -5; 
            }
            .blob {
                position: absolute;
                border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
                filter: blur(80px);
                opacity: 0.5;
                animation: float 20s infinite ease-in-out;
            }
            .blob1 {
                width: 500px;
                height: 500px;
                background: linear-gradient(135deg, #a8d8ff 0%, #7cb9e8 100%);
                top: -10%;
                left: -5%;
                animation-delay: 0s;
            }
            .blob2 {
                width: 450px;
                height: 450px;
                background: linear-gradient(135deg, #ffd4a3 0%, #ffb366 100%);
                top: 20%;
                right: -10%;
                animation-delay: -5s;
            }
            .blob3 {
                width: 600px;
                height: 600px;
                background: linear-gradient(135deg, #b3d9ff 0%, #89c4f4 100%);
                bottom: -15%;
                left: 10%;
                animation-delay: -10s;
            }
            .blob4 {
                width: 400px;
                height: 400px;
                background: linear-gradient(135deg, #ffe4b5 0%, #ffc57a 100%);
                bottom: 10%;
                right: 5%;
                animation-delay: -15s;
            }
            .blob5 {
                width: 350px;
                height: 350px;
                background: linear-gradient(135deg, #cfe8ff 0%, #a1d2ff 100%);
                top: 40%;
                left: 35%;
                animation-delay: -7s;
            }
            @keyframes float {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                }
                33% {
                    transform: translate(30px, -30px) scale(1.1);
                }
                66% {
                    transform: translate(-20px, 20px) scale(0.9);
                }
            }
            .content {
                position: relative;
                z-index: 1;
                padding: 2rem;
                color: #333;
            }
        `}</style>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <div className="gradient-container">
                    <div className="blob blob1"></div>
                    <div className="blob blob2"></div>
                    <div className="blob blob3"></div>
                    <div className="blob blob4"></div>
                    <div className="blob blob5"></div>
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}