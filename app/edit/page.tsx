import Link from "next/link";
import { Button } from "../components/buttons/Button";
import EditItem from "../components/edit-item/EditItem";
import { ProfileElementUnion } from "@/models/enums/ProfileElementTypeEnum";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

type EditPageProps = {
  searchParams?: {
    success?: string;
  };
}

export default async function Edit({searchParams}: EditPageProps) {
  const dimensionItems: ProfileElementUnion[] = ['Traits', 'Events', 'Benefits', 'Behavior', 'Interests', 'People I Admire'];
  const success = searchParams?.success === "true"; // make it boolean

  return (
    <main
      className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden"
    >
      <div className="pt-14 pb-4 px-4 min-h-full max-w-screen-2xl w-screen mx-auto flex flex-col items-center relative">
        <div className="absolute left-4 z-10">
          <Link href="/">
            <Button outlined>
              Back to Profile
            </Button>
          </Link>
        </div>
        <div className="flex w-full justify-center mb-14 relative">
          <div className="flex flex-col items-center justify-center mt-0">
            {success && <div className="mb-9 flex flex-col items-center justify-center">
              <h2
                className="text-white font-bold text-2xl align-middle"
              >
                Dimension successfully updated!
              </h2>
              <div>
                <CheckCircleIcon
                  className="w-5 h-5 fill-green-500 mx-auto mt-6 mb-2"
                  aria-hidden="true"
                />
                <p className="text-white italic text-sm m-0">Changes will be reflected in your profile</p>
              </div>
            </div>}
            <h1
              className="text-white font-bold text-3xl align-middle"
            >
              Dimensions
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[44rem] gap-5">
          {dimensionItems.map((title) => (
            <EditItem
              key={title}
              title={title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
