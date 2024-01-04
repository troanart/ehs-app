import IconLabelButtons from './components/button-sidebar'


export default function Sidebar() {
    return (

        <nav className="container flex-col flex justify-center items-center bg-indigo-500  col-span-1 row-span-6 max-w-[250px] ">
            <IconLabelButtons/>
        </nav>
    )
}