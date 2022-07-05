export type UserProfile = {
  id?: string;
  fullName?: string;
  username?: string;
  password?: string;
  password_confirmation?: string;
  email?: string;
  dob?: string;
  phone?: string;
  gender?: string;
  userGroupId?: number;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
  profile_img?: string;
};
