// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-[#222] text-[#aaa] pt-4 pb-4 px-[10px] text-center">
        <p className="mb-1">Follow DJ Eclipse:</p>
        <div className="flex justify-center gap-[15px] my-[5px]">
            <a href="#" className="text-[#ff4081] no-underline hover:underline">Instagram</a>
            <a href="#" className="text-[#ff4081] no-underline hover:underline">TikTok</a>
            <a href="#" className="text-[#ff4081] no-underline hover:underline">YouTube</a>
        </div>
        <p className="mt-1">&copy; 2025 DJ Eclipse</p>
    </footer>

  );
}

export default Footer;
