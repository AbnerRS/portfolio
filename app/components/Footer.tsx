export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <p>Designed & Built by Abner Rodrigues</p>
      <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
