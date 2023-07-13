"use client"

import { BasicInfo } from "@/models/user/BasicInfo";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type UserAvatarProps = {
  user: BasicInfo;
  color: "white" | "black";
  isAnotherUser?: boolean;
};

export const UserAvatar: React.FC<
React.ButtonHTMLAttributes<HTMLDivElement> & UserAvatarProps
> = ({ user, isAnotherUser, color, ...props }) => {
  const userName = useMemo(() => 
    user.first_name?.slice(0, 2)
  , [user]);

  const defaultClasses = "relative inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full border-4";
  const colorClasses = {
    white: "border-white bg-transparent",
    black: "bg-dark border-dark",
  };

  const fullClasses = twMerge([defaultClasses, colorClasses[color]]);

  return (
    <div 
      {...props}
      className={twMerge([fullClasses, props.className])}
    >
      <span className="font-bold text-white text-lg">{isAnotherUser ? userName : "Me"}</span>
    </div>
  );
};
