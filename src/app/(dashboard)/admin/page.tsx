import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return(
    <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-2/3"></div>
        {/* USER CARD */}
        <div className="flex gap-4 justify-between">
            <UserCard type="Student"/>
            <UserCard type="Teacher"/>
            <UserCard type="Parents"/>
            <UserCard type="Staff"/>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3"></div>
    </div>
    )
}

export default AdminPage;