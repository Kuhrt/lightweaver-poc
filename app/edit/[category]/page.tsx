import { ElementPathEnum } from '@/models/enums/ProfileElementTypeEnum';
import { getElementUnionFromPath } from '@/utils/elements';
import EditDimension from '@/app/components/edit-dimension/EditDimension';
import { ApiError } from 'next/dist/server/api-utils';
import { BuildProfileApi } from '@/services/api/BuildProfileApi';
import { useAuthFromServer } from '@/utils/auth';
import { cookies } from 'next/headers';

type EditCategoryProps = {
  params: {
    category: ElementPathEnum;
  };
};

export default async function EditCategory({
  params: { category },
}: EditCategoryProps) {
  const allowedPaths = ['traits', 'events', 'benefits', 'behavior'];
  const currentElementType = getElementUnionFromPath(category);

  // TODO: Change this to 404 page when it will be created
  if (!allowedPaths.includes(category)) {
    throw new ApiError(404, 'This page could not be found.');
  }

  // GET DATA
  const token = await useAuthFromServer(cookies());
  const buildProfileApi = new BuildProfileApi(token);
  const dimensionCategory = await buildProfileApi.getDefiniteDimension(
    currentElementType
  );

  if (!!!dimensionCategory) {
    throw new Error("Couldn't get categories data");
  }

  const elements = dimensionCategory.elements;
  const elementType = dimensionCategory.dimension_type;

  return (
    <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
      {elements?.length && !!elementType && (
        <EditDimension elementType={elementType} elements={elements} />
      )}
    </main>
  );
}
