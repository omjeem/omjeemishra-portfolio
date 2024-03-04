import omjee from "../../images/omjee.png";


export function ProfileBox() {
    return <div>
        <div className="relative inline-block text-xl h-10 w-10 m-1 mb-4 rounded-full text-center cursor-pointer select-none transition duration-200 ease-in">
            <i className="text-textColorDark"></i>
            <img src={omjee} alt="omjee" className="w-5 mx-2 " />

        </div>

    </div>
}