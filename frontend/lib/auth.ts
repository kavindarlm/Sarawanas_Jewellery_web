"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export function useAuth() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Add a small delay to ensure localStorage is ready
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const token = localStorage.getItem("admin_token");
      
      if (!token) {
        router.push("/admin/login");
        setIsChecking(false);
        return;
      }

      try {
        // Verify token with backend
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsChecking(false);
      } catch (error) {
        // Token is invalid, redirect to login
        console.error("Token verification failed:", error);
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");
        router.push("/admin/login");
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    router.push("/admin/login");
  };

  return { logout, isChecking };
}

export function getAuthHeaders() {
  const token = localStorage.getItem("admin_token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
