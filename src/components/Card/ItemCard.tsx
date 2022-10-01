import React from "react";
import useApi from "../../hooks/useApi";

interface Prop {
  url: string;
}

const ItemCard = ({ url }: Prop) => {
  const { loading, data } = useApi(url);

  return (
    <div className="flex justify-center m-4 w-72">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        {loading ? (
          <div className="animate-pulse h-40 w-full bg-gray-400"></div>
        ) : (
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={data?.images ? data.images[0] : ""}
              alt=""
            />
          </a>
        )}

        <div className="p-6">
          {loading ? (
            <h5 className="text-gray-900 text-xl font-medium mb-2 animate-pulse w-full h-12  bg-gray-400"></h5>
          ) : (
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {data?.title || url}
            </h5>
          )}

          {loading ? (
            <p className="text-gray-700 text-base mb-4 animate-pulse w-full h-12  bg-gray-400"></p>
          ) : (
            <p className="text-gray-700 text-base mb-4">
              {data?.description ? data?.description : ""}
            </p>
          )}
          <a
            href={data?.url || url}
            target="_blank"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
