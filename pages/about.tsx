import Image from "next/image";

interface HomeProps {
  data: any;
}
export default function Page({ data }: any) {
  return (
    <div className="container ml-16">
      <h1 className="font-sans text-4xl text-center">Product List</h1>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {data?.map((item: any) => (
          <div key={item.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="justify-center">
                <div className="flex justify-center">
                  <img src={item.image} height={100} width={150} />
                </div>
                <div className="mx-5">
                  <p className="text-2xl font-bold">{item.id}.</p>
                  <p>{item.title}</p>
                  <div className="flex justify-between">
                    <p className="text-xl font-serif">Price</p>
                    <p className="text-xl font-bold">${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-10">
        <button className="bg-slate-800 py-2 w-40 rounded-lg">
          <a href="/" className="text-white">
            Back
          </a>
        </button>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
}
