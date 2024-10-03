import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {
        email,
        username,
        password,
        firstname,
        lastname,
    }= await req.json();
    const userData = {
        email,
        username,
        password,
        name: {
            firstname,
            lastname
        },
        address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: 3,
            zipcode: '12926-3874',
            geolocation: {
                lat: '-37.3159',
                long: '81.1496'
            }
        },
        phone: '1-570-236-7033'
    };

    const res = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const result = await res.json();
    console.log("BACK", result);

    return NextResponse.json({
        user: result
    }, { status: 201 });
}
