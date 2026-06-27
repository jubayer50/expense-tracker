import { Card } from "@heroui/react";
import { FaWallet, FaChartPie, FaBullseye, FaHistory } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Track Expenses",
    description:
      "Easily add and manage your daily expenses to keep every transaction organized.",
    icon: FaWallet,
  },
  {
    id: 2,
    title: "Visual Analytics",
    description:
      "Understand your spending habits through interactive charts and reports.",
    icon: FaChartPie,
  },
  {
    id: 3,
    title: "Budget Planning",
    description:
      "Set monthly budgets and stay in control of your financial goals.",
    icon: FaBullseye,
  },
  {
    id: 4,
    title: "Expense History",
    description: "Review previous transactions and monitor spending over time.",
    icon: FaHistory,
  },
];

const KeyFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-330 mx-auto px-3">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Powerful Features for{" "}
            <span className="text-blue-600">Smart Money Management</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
            Everything you need to track, analyze, and improve your financial
            habits in one simple platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.id}
                className="border border-gray-200 rounded-lg shadow p-6"
              >
                <Card.Header>
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon className="text-blue-600 text-2xl" />
                  </div>
                </Card.Header>

                <Card.Content className="mt-5">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {feature.description}
                  </p>
                </Card.Content>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
