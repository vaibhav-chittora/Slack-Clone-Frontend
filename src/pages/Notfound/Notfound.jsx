import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

function Notfound() {
    const navigate = useNavigate()
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <Card className='max-w-xl text-center shadow-lg shadow-gray-600'>
                    <CardHeader>
                        <CardTitle>
                            {/* 404 - Not Found */}
                            Oooops.... Not Found
                        </CardTitle>
                        <CardDescription>
                            The page you are looking for does not exist.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404" className="w-full h-auto" />

                        <Button
                            className="hover:bg-gray-300"
                            size="lg"
                            variant='outline'
                            onClick={() => navigate(-1)}
                        >


                            Go Back

                        </Button>
                    </CardContent>

                </Card>
            </div >



        </>
    )
}

export default Notfound