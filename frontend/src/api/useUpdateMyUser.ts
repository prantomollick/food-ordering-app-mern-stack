import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to update user!");
    }

    return res.json();
  };

  const {
    mutateAsync: updateUser,
    isError,
    isLoading,
    isSuccess,
  } = useMutation(updateMyUserRequest);

  return {
    updateUser,
    isError,
    isLoading,
    isSuccess,
  };
};
