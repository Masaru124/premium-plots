import "./globals.css";

export const metadata = {
  title: "Premium Plots Bengaluru | Verified Open Plot Projects & Villa Plots",
  description: "Discover Premium Open Plot Projects in Bengaluru • Verified plotted developments • Free VIP Site Visits • Land Investment Guidance • Direct from Trusted Developers",
  keywords: "open plots bengaluru, villa plots devanahalli, sarjapur plots, biappa approved plots, bda plots bangalore, rera registered plots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100">{children}</body>
    </html>
  );
}
