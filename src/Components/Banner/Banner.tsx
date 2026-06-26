import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f)",
      }}
      className="relative bg-cover bg-center "
    >
      {/* overlay div */}
      <div className="absolute inset-0 bg-black/65 z-10"></div>

      {/* content div */}
      <div className="max-w-250 relative mx-auto px-3 py-16 z-20">
        <div className="text-center text-white">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold md:leading-12 lg:leading-15">
            Track Every Expense <br />
            Control Your Money
          </h2>

          <p className=" max-w-160 mx-auto mt-5">
            Manage your income, expenses, and savings in one place. Get clear
            insights into your spending habits and make smarter financial
            decisions every day.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 justify-center">
          <Button className={"rounded-md"}>Get Started</Button>
          <Button className={"rounded-md"}>Track Expenses</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
