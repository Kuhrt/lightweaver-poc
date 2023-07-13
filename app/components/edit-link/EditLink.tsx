"use client";

import { notSupportedDimensions } from "@/utils/elements";
import Link from "next/link";
import PencilIcon from "../icons/PencilIcon";
import { ProfileElementUnion } from "@/models/enums/ProfileElementTypeEnum";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Tooltip, TooltipOptions } from "flowbite";

type EditLinkProps = {
  title: ProfileElementUnion;
}

const EditLink = ({title}: EditLinkProps) => {
  const linkElement = useRef<HTMLAnchorElement>(null);
  const tooltipElement = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<Tooltip | undefined>(undefined);

  const options = useMemo<TooltipOptions>(() => (
    {
      placement: 'left',
      triggerType: 'none',
    }
  ), []);

  useLayoutEffect(() => {
    setTooltip(new Tooltip(tooltipElement.current, linkElement.current, options));
  }, [options]);

  const handleHover = () => {
    tooltip?.show();
  }

  const handleLeave = () => {
    tooltip?.hide();
  }

  return (
    <div className="flex items-center">
      <Link 
        href={!notSupportedDimensions.includes(title) ? `/edit/${title.split(" ")[0].toLowerCase()}` : {}}
        ref={linkElement}
        onMouseOver={notSupportedDimensions.includes(title) ? handleHover : undefined}
        onMouseLeave={handleLeave}
      >
        <PencilIcon />
      </Link>
      <div
        ref={tooltipElement}
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-200 transition-opacity duration-300 bg-dark rounded-lg shadow-sm opacity-0 tooltip"
      >
        Coming soon! Category under development.
      </div>
    </div>
  );
}

export default EditLink;