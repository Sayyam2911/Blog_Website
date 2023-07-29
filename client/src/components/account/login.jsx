import {Logo,LoginImg} from '../../assets/index';
import {useState} from 'react'

const SignUpInitialValues = {
    name : '',
    email : '',
    password: ''
}

const Login = () => {
    const [account,toggleaccount] = useState('login')
    const toggleSignUp = () => {
        account === 'login' ? toggleaccount('signup') : toggleaccount('login');
    }
    const [signup, setSignup] = useState(SignUpInitialValues)
    const OnInputChange = (e) =>{
        setSignup({...signup,[e.target.name] : e.target.value})
    }
    return (<>
            <div className="flex min-h-full flex-col justify-center px-6 pt-14 pb-12 lg:px-80" style={{ backgroundImage: `url(${LoginImg})`, backgroundSize: 'cover' ,backgroundPosition:'center'}}>
                    { account === 'login' ?
                        <div className="shadow-md rounded-md py-3 bg-[#e9ebf8]">
                    <div id ="Sign In">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-24 w-30"
                        src={Logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900 text-left"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required=""
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required=""
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a
                            href="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            onClick={() => {toggleSignUp()}}
                        >
                            Register
                        </a>
                    </p>
                </div>
                    </div>
                        </div>
                        :
                        <div className="shadow-md rounded-md bg-[#e9ebf8]">
                    <div id ="Sign Up">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-24 w-30"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Create Your Account
                            </h2>
                        </div>
                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label
                                        htmlFor="Name"
                                        className="block text-sm font-medium leading-6 text-gray-900 text-left"
                                    >
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required=""
                                            className="block w-full rounded-md px-3 border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {OnInputChange(e)}}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900 text-left"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required=""
                                            className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {OnInputChange(e)}}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required=""
                                            className="block w-full rounded-md border-0 px-3 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => {OnInputChange(e)}}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <p className="mt-7 pb-3 text-center text-sm text-gray-500">
                                Already a Member?
                                <a
                                    href="#"
                                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                    onClick={() => toggleSignUp()}
                                >
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </div>
                        </div>
                    }
                </div>
        </>
    )
}

export default Login;