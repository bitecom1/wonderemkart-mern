/**
 * Title: Write a program using JavaScript on InactiveUser
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 17, November 2023
 */

import React, { useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useUpdateUserMutation } from "@/services/user/userApi";

const InactiveUser = ({ id }) => {
  const [updateStatus, { isLoading, data, error }] = useUpdateUserMutation();

  useEffect(() => {
    if (data) {
      alert(data?.message);
    }
    if (error?.data) {
      alert(error?.data?.message);
    }
  }, [data, error]);

  function handleUpdateStatus() {
    const formData = new FormData();
    formData.append("status", "inactive");

    updateStatus({ id, body: formData });
  }

  return (
    <button
      type="button"
      disable={isLoading}
      className="p-1 rounded-secondary bg-red-500 !text-white"
      onClick={handleUpdateStatus}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
      ) : (
        <FiTrash className="w-5 h-5" />
      )}
    </button>
  );
};

export default InactiveUser;
