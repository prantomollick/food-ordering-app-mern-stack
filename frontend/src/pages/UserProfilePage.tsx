import { useUpdateMyUser } from "@/api/useUpdateMyUser";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { updateUser, isLoading } = useUpdateMyUser();

  return (
    <div>
      <UserProfileForm onSave={updateUser} isLoading={isLoading} />
    </div>
  );
}

export default UserProfilePage;
