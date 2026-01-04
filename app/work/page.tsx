import WorksPage from "@/components/home/work";

export const metadata = {
  title: "Selected Works",
  description:
    "A detailed archive of technical deployments, from fintech infrastructure to multi-tenant marketplaces built by Alexander Ukwueze.",
};

export default function page() {
  return (
    <div className="main-container">
      <WorksPage />
    </div>
  );
}
