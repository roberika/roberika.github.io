import { useEffect, useState } from 'react';
import Card from './Card.jsx'

export default function Grid({ items }){

    return <div className={"grid py-10 gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}>
        {items?.map((item, index) => (
            <Card item={item}/>
        ))}
    </div>
}