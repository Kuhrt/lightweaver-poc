import { ProfileElementUnion } from "@/models/enums/ProfileElementTypeEnum";
import { dimensionsIconConfig } from "@/utils/elements";
import EditLink from "../edit-link/EditLink";

export type EditItemProps = {
  title: ProfileElementUnion,
};

const EditItem = ({title}: EditItemProps) => {
  const DimensionIcon = dimensionsIconConfig[title];

  return ( 
    <div className="w-full bg-white rounded-lg px-7 py-2 flex items-center">
      <div className="mr-auto flex items-center">
        <div className="mr-2">
        <DimensionIcon className="w-auto h-14" />
        </div>
        <p className="m-0 text-black font-bold text-xl mr-4">{title}</p>
      </div>
      <EditLink title={title} />
    </div>
  );
}

export default EditItem;