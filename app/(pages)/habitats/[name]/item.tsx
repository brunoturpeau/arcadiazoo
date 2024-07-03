'use client'
// @ts-ignore

import Image from "next/image";
import {Component} from "react";
import Link from "next/link";

export class Item extends Component<{ animalId: number, animalName: string, animalSlug: string, animalCover: string, animalRace: string }> {

    render() {
        let {animalId, animalName,animalSlug, animalCover, animalRace} = this.props

        return (
            <>
                <div className={`bg-white flex flex-col items-center sm:flex sm:flex-row justify-between mb-5 p-5 mx-10 sm:mx-0 sm:p-0  drop-shadow-lg`}
                     key={animalId}>
                    <Image className={`rounded-full sm:rounded-none shadow-xl sm:shadow-none`} src={animalCover} alt={animalName} width={150} height={150}/>
                    <div className={`flex flex-col items-center w-full justify-center sm:ps-10`}>
                        <h2 className={`text-2xl capitalize mt-5 sm:mt-0`}>
                            {animalName}
                        </h2>
                        <p>{animalRace}</p>
                    </div>
                    <div className={`flex items-center px-10 pt-5 sm:pt-0`}>
                        <Link href={`/${animalSlug}`}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="w-10 h-10 opacity-50 hover:scale-105 hover:opacity-80"
                                 width="16" height="16"
                                 fill="currentColor"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
