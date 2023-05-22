import { Element } from "../elements/Element";
import { UserProfileInfo } from "./UserProfileInfo";

export interface UserProfile {
  info: UserProfileInfo
  elements: Element[]
}