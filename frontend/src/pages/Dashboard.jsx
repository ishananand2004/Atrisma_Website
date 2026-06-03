import PageHeader from '@/components/layout/PageHeader';
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection';

// Dashboard page – replaces the placeholder "M" symbol with the moving product showcase carousel
export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#030014] flex flex-col">
      {/* Optional header – you can replace or remove this */}
      <PageHeader
        title="Dashboard"
        subtitle="Welcome to your premium dashboard. Browse our product showcase below."
      />

      {/* Product carousel – this replaces the old "M" placeholder */}
      <ProductShowcaseSection />
    </div>
  );
}
