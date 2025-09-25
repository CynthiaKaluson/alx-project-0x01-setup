import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
    users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [allUsers, setAllUsers] = useState<UserProps[]>(users);

    const handleAddUser = (newUser: UserData) => {
        const userToAdd: UserProps = {
            ...newUser,
            id: allUsers.length + 1
        };
        setAllUsers([userToAdd, ...allUsers]);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Users Directory</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-6 py-2 rounded-full text-white hover:bg-blue-800 transition"
                    >
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allUsers.map((user: UserProps) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            address={user.address}
                            phone={user.phone}
                            website={user.website}
                            company={user.company}
                        />
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <UserModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users
        }
    };
}

export default Users;