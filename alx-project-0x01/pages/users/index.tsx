import Header from "@/components/layout/Header";

const Users: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <h1 className="text-2xl font-semibold">Users Page</h1>
                <p>Users content will go here</p>
            </main>
        </div>
    )
}

export default Users;