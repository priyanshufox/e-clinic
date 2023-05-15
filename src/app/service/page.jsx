"use client"
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react";

const Service = () => {

    const [isChatOpen, setIsChatOpen] = useState(false)
    const [prompt, setPrompt] = useState("")

    const botDisplayFeatures = [
        {
            "id": 1,
            "emoji": "😌",
            "text": "Our bot will help you to find the best medicine for your disease."
        },
        {
            "id": 2,
            "emoji": "💊",
            "text": "Our bot is trained with the data of 1000+ medicines."
        },
        {
            "id": 3,
            "emoji": "🤖",
            "text": "Our bot is based on the latest AI technology."
        }
    ]

    return(
        <div className={"relative flex flex-col min-h-[calc(100vh-4.5rem)] bg-gray-50"}>
            {
                isChatOpen ?
                    "chat"
                    :
                    <div className={'max-w-3xl w-full h-[calc(90vh-4.7rem)] mx-auto flex flex-col justify-center items-center'}>
                        <h1 className={"text-4xl font-bold my-5"}>
                            Sanjeevni Med Bot
                        </h1>
                        <div className={'w-full flex flex-col max-w-sm gap-2'}>

                            {
                                botDisplayFeatures.map((feature,key) => {
                                    return(
                                        <div className={'grid grid-cols-12 bg-gray-100 px-1 py-3 rounded-lg'} key={key}>
                                            <div className={'col-span-2 flex flex-row justify-center items-center text-2xl'}>
                                                {feature.emoji}
                                            </div>
                                            <div className={'col-span-10 text-sm'}>
                                                {feature.text}
                                            </div>
                                        </div>
                                        )

                                })

                            }

                        </div>

                    </div>
            }



            <div className={'absolute bottom-0 left-0 w-full py-2 flex flex-row items-center justify-center'}>
                <div className={'max-w-3xl w-full p-3'}>
                    <div
                        className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                        <TextareaAutosize
                            tabIndex="0" data-id="root" rows="1"
                            placeholder="Send a message."
                            className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0 height-[24px] max-h-[200px] overflow-y-hidden outline-transparent shadow-2xl"
                        >

                        </TextareaAutosize>
                        <button
                            className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                 stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em"
                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Service