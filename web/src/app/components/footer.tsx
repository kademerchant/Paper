

export default function Footer() {
    return (
    <footer className="flex flex-row justify-between pb-3 pl-8 Pt-8 w-full sticky bg-[#FEFBEA] z-30">
        <div className='flex flex-row justfiy-center'>
            <p className='text-[0.6rem] lg:text-[0.75rem] font-quest cursor-default '>
                site by: 
            </p>
            <p className='text-[0.7rem] lg:text-[0.75rem] font-quest ml-2 cursor-pointer'>
                <a href="https://github.com/kademerchant" aria-label="visit the developers github">CB3K</a>
            </p>
        </div>
    </footer>
    )
}