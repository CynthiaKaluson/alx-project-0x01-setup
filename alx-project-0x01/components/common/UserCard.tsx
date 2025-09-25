import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    name,
    username,
    email,
    address,
    phone,
    website,
    company
}) => {
    return (
        <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600">@{username}</p>
            </div>

            <div className="space-y-3">
                <div>
                    <span className="font-medium text-gray-700">Email: </span>
                    <span className="text-gray-600">{email}</span>
                </div>

                <div>
                    <span className="font-medium text-gray-700">Phone: </span>
                    <span className="text-gray-600">{phone}</span>
                </div>

                <div>
                    <span className="font-medium text-gray-700">Address: </span>
                    <span className="text-gray-600">
                        {address.street}, {address.suite}, {address.city}
                    </span>
                </div>

                <div>
                    <span className="font-medium text-gray-700">Company: </span>
                    <span className="text-gray-600">{company.name}</span>
                </div>

                <div>
                    <span className="font-medium text-gray-700">Website: </span>
                    <a href={`http://${website}`} className="text-blue-500 hover:underline">
                        {website}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;