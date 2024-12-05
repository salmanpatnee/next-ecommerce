import Hero from "./components/Hero";
import CategoryMenu from "./components/CategoryMenu";

export default function Home() {
  return (
    <section className="wrapper">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/12 border-e py-10 pe-4 hidden lg:block">
          <CategoryMenu />
        </div>

        <div className="w-full lg:w-10/12 lg:py-10 py-5 lg:ps-10">
          <Hero />
        </div>
      </div>
    </section>
  );
}
