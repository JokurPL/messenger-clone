"use client";

import Avatar from "@/app/components/Avatar";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserBoxProps {
  user: User;
}

const UserBox: React.FC<UserBoxProps> = ({ user }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios.post("/api/conversations", { userId: user.id }).then((data) => {
      router.push(`/conversations/${data.data.id}`);
    });
  }, [router, user]);

  return (
    <div
      onClick={handleClick}
      className="w-full mt-2 border-b-2 relative  flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 hover:translate-x-2 rounded-lg transition cursor-pointer">
      <Avatar user={user} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
