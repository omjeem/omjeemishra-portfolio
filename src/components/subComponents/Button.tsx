export function Button({ label, onClick }: any) {
    return <div className="mx-2">
        <button onClick={onClick} type="button" className="  text-white bg-purple-600 hover:bg-purple-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 m-1  ">{label}</button>
    </div>
}