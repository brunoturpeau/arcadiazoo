'use client'
// @ts-ignore

import Image from "next/image";
import {Component} from "react";

export class Item extends Component<{ animal_id: any, animal_name: any, animal_cover: any, animal_race: any }> {
    render() {
        let {animal_id, animal_name, animal_cover, animal_race} = this.props

        return (
            <>
                <div className={`bg-white flex justify-between mb-5 drop-shadow-lg`}
                     key={animal_id}>
                    <Image src={animal_cover} alt={animal_name} width={150} height={150}/>
                    <h3>Item {animal_id} </h3>
                    <p>{animal_name}</p>
                    <p>{animal_cover}</p>
                    <p>{animal_race}</p>
                </div>
            </>
        )
    }
}
