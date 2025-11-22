import {react,useState} from 'react';

const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showpassword,setShowpassword]=useState(false);

    const handleLogin=async()=>{
     const res = await fetch("https://localhost:5000/api/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email,
            password
        })
     });
        const data = await res.json();
        console.log(data);
    };

    return(
        <>
        <input type="email" placeholder='Enter your email' onChange={(e) =>{
            setEmail(e.target.value);
        }}/>
        <div className="mb-4 flex flex-col w-95 relative">
            <label className="text-white text-sm">Password</label>

            <input
              className="h-10 w-full mt-2 rounded-md bg-[#111a31] text-white p-2 border border-gray-600"
              type={showpassword ? "text" : "password"}
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="absolute right-3 top-9 text-gray-300"
              onClick={() => setShowpassword(!showpassword)}
            >
              {showpassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                </svg>
              )}
            </button>

            <button className="h-10 bg-[#3B82F6] border-0 rounded-md mt-2">Login</button>
          </div>
        </>
    )
}

export default Login;