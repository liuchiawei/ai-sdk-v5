import BackToHome from "@/app/components/backToHome";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BackToHome />
      {children}
    </div>
  );
}