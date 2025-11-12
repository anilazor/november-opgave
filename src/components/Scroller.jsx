import CategoryList from "./CategoryList";

const Scroller = () => {
  return (
    <div className="my-8 flex gap-4 max-w-md  items-center  overflow-scroll justify-start">
      <CategoryList />
    </div>
  );
};

export default Scroller;
