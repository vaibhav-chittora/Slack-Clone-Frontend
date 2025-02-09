import SignupCard from "@/components/organisms/Auth/SignupCard";

function Auth() {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#5c3858] ">

            <div className="md:h-auth md:w-[420px]">

                <SignupCard />

            </div>
        </div>
    );
}

export default Auth;
