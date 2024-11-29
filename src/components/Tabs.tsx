interface Props {
  data: any;
  next: any;
  categoryNo: number;
}

export default function Tabs({ data, next, categoryNo }: Props) {
  return (
    <div className="flex gap-5 justify-center mt-[50px]">
      <button
        className={`px-8 py-2 ${
          data && categoryNo === 1 ? "bg-blue-600 text-white" : "bg-white"
        } rounded-md`}
        onClick={() => next(1)}
      >
        All
      </button>
      <button
        className={`px-8 py-2 bg-gree rounded-md ${
          categoryNo === 2 ? "bg-blue-600 text-white" : " bg-white text-black"
        }`}
        onClick={() => next(2)}
      >
        Completed
      </button>
      <button
        className={`px-8 py-2 bg-gree rounded-md ${
          categoryNo === 3 ? "bg-blue-600 text-white" : " bg-white text-black"
        }`}
        onClick={() => next(3)}
      >
        Delete
      </button>
    </div>
  );
}
