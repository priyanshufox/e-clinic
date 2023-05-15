"use client"



const Patient = () => {

    const links = [
        {
            name:"Medical History",
            link:"/history"
        }
    ]
   const onform = () => {
        window.location.href = "/history";
    }


    return (

        <div className={"my-10"}>

            <h1 className=" text-center text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Smart <span className="underline decoration-blue-500">Card</span>
            </h1>
            <div
                className="py-8 px-8 max-w-sm my-8 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/picc.png"
                     alt="Woman's Face"/>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                           Priyanshu Rathore
                        </p>
                        <p className="text-slate-500 font-medium">
                            Address: 123, ABC, XYZ
                        </p><p className="text-slate-500 font-medium">
                            Date of Birth: 12/12/12
                        </p><p className="text-slate-500 font-medium">
                            Blood Group: A+
                        </p>
                    </div>
                    <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                        {
                            links.map((link,index)=>{
                                return(
                                    <a href={link.link} key={index}
                                       className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                        {link.name}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </div>


    )


}

export default Patient