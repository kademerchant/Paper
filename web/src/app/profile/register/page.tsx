import React from 'react';

export default function Register() {
    return (
        <main className="flex flex-col items-center justify-center w-4/5 mx-auto min-h-full">
            <form className="flex flex-col  items-center max-w-full">
                <label>Name</label>
                <input className="w-1/6 sm:w-full" type="text" placeholder=" name..."/>
                <label>Email</label>
                <input className="w-1/6 sm:w-full" type="text" placeholder="example@gmail.com"/>
                <label>Choose a username </label>
                <input className="w-1/6 sm:w-full" type="text" placeholder="xAlexanderTheGreatx"/>
            </form>
        </main>
    )
}