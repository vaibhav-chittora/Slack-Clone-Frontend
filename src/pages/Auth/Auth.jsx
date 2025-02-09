function Auth({ children }) {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#5c3858] ">

            <div className="md:h-auth md:w-[420px]">

                {children}
                {/* <SigninCard /> */}

            </div>
        </div>
    );
}

export default Auth;
