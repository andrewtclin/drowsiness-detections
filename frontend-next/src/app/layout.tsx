import "./globals.css";

export const metadata = {
  title: "Drowsiness Detections",
  description: "This application showcases the trained model by YOLOv5.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
