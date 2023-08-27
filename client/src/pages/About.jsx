const About = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-gray-700 leading-relaxed">
        Selamat datang di toko online ini! Saya berkomitmen untuk menyediakan
        produk berkualitas tinggi kepada pelanggan. Dengan beragam produk mulai
        dari elektronik hingga fashion, memiliki sesuatu untuk semua orang.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Misi : menjadikan pengalaman belanja online Anda semudah dan
        menyenangkan mungkin.Say sangat menghargai kepuasan Anda dan berusaha
        untuk memberikan layanan pelanggan yang luar biasa setiap saat.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Terima kasih telah memilih kami untuk kebutuhan belanja Anda. Selamat
        berbelanja!
      </p>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Visi Kami</h3>
        <p className="text-gray-700 leading-relaxed">
          Visi : menjadi toko online pilihan utama bagi semua orang ketika
          mencari produk berkualitas dan layanan pelanggan yang unggul.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Nilai Kami</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Kepuasan Pelanggan: Kepuasan Anda adalah prioritas utama kami.
          </li>
          <li>
            Kualitas Produk: Kami hanya menyediakan produk dengan kualitas
            terbaik.
          </li>
          <li>
            Inovasi: Kami terus berinovasi untuk meningkatkan pengalaman belanja
            Anda.
          </li>
          <li>
            Keberlanjutan: Kami berkomitmen untuk praktik bisnis yang
            berkelanjutan dan ramah lingkungan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
