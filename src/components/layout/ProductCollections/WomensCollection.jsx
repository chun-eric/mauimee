import CollectionPage from "../../../pages/collections/CollectionPage";


const WomensCollection = () => {
  const womensCollectionData = {
    title: "Mens Collection",
    description: "Our premium Shirt collection for women",
    products: [],
    filterOptions: [
      {
        name: "Categories",
        options: ["Formal", "Casual", "Sports", "Beach", "Hawaiian", "Dress"],
      },
    ],
    recentlyViewed: [],
    recomendations: [],
  };
  return <CollectionPage collectionData={womensCollectionData} />;
};

export default WomensCollection;
