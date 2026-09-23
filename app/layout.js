export const metadata = {
  title: 'MediCare - Senior Health Portal',
  description: 'Medication tracking and care management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#0B1B3D', color: '#FFFFFF' }}>
        {children}
      </body>
    </html>
  );
}