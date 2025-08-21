

export default function AdminFooter() {
    return(
        <div>
            <div className="flex justify-between ">
                <div>
                    <p>© Create by ashraful pathan</p>
                </div>
                <div className="flex gap-4">
                    <a className="hover:underline cursor-pointer hover:text-blue-700">website</a>
                    <a className="hover:underline cursor-pointer hover:text-blue-700">facebook</a>
                    <a className="hover:underline cursor-pointer hover:text-blue-700">Linkedin</a>
                    <a className="hover:underline cursor-pointer hover:text-blue-700">GitHub</a>                                    
                </div>
            </div>
        </div>
    )
}