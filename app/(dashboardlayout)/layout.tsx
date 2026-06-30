import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Connect',
  description: 'Attendance System',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  );
}