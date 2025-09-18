"use client"
import { useRouter } from "next/navigation";

const LogoutComponent = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <button
      className="px-4 py-2 rounded-lg font-semibold bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
export default LogoutComponent