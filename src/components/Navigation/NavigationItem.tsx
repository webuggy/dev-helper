import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { IconComponentList } from "../../util/icon-list";
import CustomIcon from "../Icon/CustomIcon";
interface Prop {
  name: string;
  path: string;
  items: ItemProp[];
}
interface ItemProp {
  name: string;
  path: string;
  icon: string;
  iconSize: number;
}

const NavigationItem = ({ name, items, path }: Prop) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <li className="px-5">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-500 flex justify-center items-center">
            {name}
          </div>
        </div>
      </li>
      {items.map((el, i) => (
        <li key={i}>
          <span
            onClick={() => navigate(`/${path}/${el.path}`)}
            className="hover:cursor-pointer  ml-2 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <CustomIcon
              icon={el.icon as IconComponentList}
              iconSize={el.iconSize || 22}
            />
            <span className="ml-2 text-sm tracking-wide truncate ">
              {el.name}
            </span>
          </span>
        </li>
      ))}
    </Fragment>
  );
};

export default NavigationItem;
