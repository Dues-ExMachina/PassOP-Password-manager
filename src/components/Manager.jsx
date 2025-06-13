import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const [visiblePassword, setVisiblePassword] = useState([])

    //Toggle function in table
    const togglePasswordVisiblity = (id) => {
        setVisiblePassword(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        )
    }

    //password Load password
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])


    //Password show & hide
    const showPassword = () => {

        if (ref.current.src.includes("/icons/ceye.svg")) {
            ref.current.src = "/icons/oeye.svg"
            passwordref.current.type = "password"
        }
        else {
            ref.current.src = "/icons/ceye.svg"
            passwordref.current.type = "text"
        }

    }

    //Saving password
    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log(...passwordArray, form)
            setform({ site: "", username: "", password: "" })
            toast.success('Password Saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast.error('Invalid Entry!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
    }

    //Delete password
    const deletePassword = (id) => {
        let c = confirm("Do you want to delete")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast.error('Password Deleted!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }

    }
    //Edit Password
    const editPassword = (id) => {
        console.log("editing", id);
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        // setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        // localStorage.setItem('passwords', JSON.stringify([...passwordArray, form]))
        // console.log(...passwordArray, form)
        toast.warn('Please Save the password!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    //Cpying Text
    const copyText = (text) => {
        toast('Text Copied!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"

            />
            {/* Enhanced Cosmic Purple Background */}
            {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

            {/* Glass Container with Cosmic Purple styling */}
            <div className="bg-white/[0.06] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.4px] max-w-4xl p-3 container sm:w-fit  md:py-11 md:px-16 mx-auto">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-violet-400">&lt;</span>
                    <span className='text-purple-50'>Pass</span>
                    <span className="text-violet-400">OP/ &gt;</span>
                </h1>
                <p className='text-purple-200 text-lg text-center'>Your Own Password Manager</p>

                <div className='flex flex-col p-4 gap-3 items-center lg:w-[700px]'>
                    <input
                        className='bg-white/10 border border-purple-300/30 text-purple-50 placeholder-purple-200 rounded-full w-full p-4 py-2 backdrop-blur-sm focus:border-violet-400 focus:outline-none'
                        type="text"
                        placeholder="Website URL"
                        name='site'
                        id='Website'
                        value={form.site}
                        onChange={handleChange}
                    />

                    <div className='flex md:flex-row flex-col w-full md:gap-2 gap-3'>
                        <input
                            className='bg-white/10 border border-purple-300/30 text-purple-50 placeholder-purple-200 rounded-full w-full p-4 py-2 backdrop-blur-sm focus:border-violet-400 focus:outline-none'
                            type="text"
                            placeholder="Username"
                            name='username'
                            id='username'
                            value={form.username}
                            onChange={handleChange}
                        />
                        <div className="relative">
                            <input
                                ref={passwordref}
                                className='bg-white/10 border border-purple-300/30 text-purple-50 placeholder-purple-200 rounded-full w-full p-4 py-2 backdrop-blur-sm focus:border-violet-400 focus:outline-none'
                                type="password"
                                placeholder="Password"
                                name='password'
                                id='password'
                                value={form.password}
                                onChange={handleChange}
                            />
                            <span className='absolute right-[5px] top-[12px]' onClick={showPassword}><img ref={ref}
                                className='cursor-pointer w-5 text-purple-50' src="/icons/oeye.svg" alt="" /></span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='gap-1 flex justify-center items-center w-fit px-6 py-3 rounded-full text-white bg-violet-500 hover:bg-violet-600 transition-colors duration-200 shadow-lg'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save
                    </button>
                </div>
                <div className="passwords text-white">
                    <h2 className='py-4 font-bold text-xl'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show!!</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full text-white text-center overflow-hidden rounded-md">
                        <thead className='bg-violet-600'>
                            <tr>
                                <th className='py-1' >Website</th>
                                <th className='py-1' >Username</th>
                                <th className='py-1' >Password</th>
                                <th className='py-1' >Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>

                                    <td className='py-1 site'>
                                        <div className=' flex justify-center items-center'>
                                            <span>
                                                <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                            </span>
                                            <div className='CopyIcon' onClick={() => copyText(item.site)}>
                                                <lord-icon
                                                    className="w-4 hover:cursor-pointer p-1"
                                                    src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-1 username'>
                                        <div className=' flex justify-center items-center'>
                                            <span>{item.username}</span>
                                            <div className='CopyIcon' onClick={() => copyText(item.username)}>
                                                <lord-icon
                                                    className="w-4 hover:cursor-pointer p-1"
                                                    src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-1 pass w-[150px] text-center overflow-hidden whitespace-nowrap'>
                                        <div className=' flex justify-center items-center gap-1 '>
                                            <span>
                                                {visiblePassword.includes(item.id) ? item.password : "*".repeat(item.password.length)}
                                            </span>
                                            <div className='CopyIcon' onClick={() => copyText(item.password)}>
                                                <lord-icon
                                                    className="w-4 hover:cursor-pointer p-1"
                                                    src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff">
                                                </lord-icon>
                                            </div>
                                            <span className='eye' onClick={() => togglePasswordVisiblity(item.id)}>
                                                <img className='cursor-pointer w-4 text-purple-50 invert' src={visiblePassword.includes(item.id) ? "/icons/ceye.svg" : "/icons/oeye.svg"} alt="" />
                                            </span>
                                        </div>
                                    </td>

                                    <td className='py-1 tools'>
                                        <div className=' flex justify-center items-center gap-2'>
                                            <span className='hover:cursor-pointer' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/tobsqthh.json"
                                                    trigger="hover"
                                                    colors="primary:#ebe6ef,secondary:#7166ee,tertiary:#3a3347"
                                                    style={{ "width": "24px", 'height': '24px' }}>
                                                </lord-icon>
                                            </span>
                                            <span className=' hover:cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/oqeixref.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff"
                                                    style={{ "width": "24px", 'height': '24px' }}>
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager