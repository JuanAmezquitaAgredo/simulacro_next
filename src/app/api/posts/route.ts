import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest){

    const res = await fetch('https://fakestoreapi.com/products', {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const products = await res.json();

    return NextResponse.json({
        products
    }, {status: 200 })
}