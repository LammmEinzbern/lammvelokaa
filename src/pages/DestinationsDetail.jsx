import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../utils/SupaWorld";
import Header from "../components/Header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DestinasiDetail = () => {
  const { id } = useParams();
  const [destinasi, setDestinasi] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinasi = async () => {
      const { data, error } = await supabase
        .from("negara_asia")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setDestinasi(data);
      setLoading(false);
    };

    fetchDestinasi();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-6">
      <Header />
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 space-y-6 mt-20">
        {/* Gambar Utama */}
        <div>
          {loading ? (
            <Skeleton height={256} className="w-full rounded-xl" />
          ) : (
            <img
              src={
                destinasi?.foto_wisata || "https://via.placeholder.com/600x300"
              }
              alt={destinasi?.nama_tempat}
              className="w-full h-64 object-cover rounded-xl"
            />
          )}
        </div>

        {/* Informasi Umum */}
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-gray-800">
            {loading ? <Skeleton width={300} /> : destinasi?.nama_tempat}
          </h2>
          <p className="text-gray-600 text-lg">
            {loading ? <Skeleton count={3} /> : destinasi?.deskripsi_tempat}
          </p>
          <div className="text-gray-700 space-y-1">
            <p>
              <strong>Negara:</strong>{" "}
              {loading ? <Skeleton width={120} /> : destinasi?.nama_negara}
            </p>
            <p>
              <strong>Kategori:</strong>{" "}
              {loading ? <Skeleton width={150} /> : destinasi?.kategori_tempat}
            </p>
          </div>

          {loading ? (
            <Skeleton width={200} height={20} />
          ) : (
            destinasi?.link && (
              <a
                href={destinasi.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                🌐 Kunjungi Website Resmi
              </a>
            )
          )}
        </div>

        {/* Tempat Alam 1 */}
        {loading ? (
          <div>
            <Skeleton height={24} width={240} />
            <Skeleton height={208} className="w-full my-2 rounded" />
            <Skeleton count={2} />
          </div>
        ) : (
          destinasi?.tempat_alam && (
            <div className="border-t pt-6 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                🏞️ {destinasi.tempat_alam}
              </h3>
              {destinasi.foto_alam && (
                <img
                  src={destinasi.foto_alam}
                  alt={destinasi.tempat_alam}
                  className="w-full h-52 object-cover rounded-md"
                />
              )}
              <p className="text-gray-600">{destinasi.deskripsi_alam}</p>
            </div>
          )
        )}

        {/* Tempat Alam 2 */}
        {loading ? (
          <div>
            <Skeleton height={24} width={240} />
            <Skeleton height={208} className="w-full my-2 rounded" />
            <Skeleton count={2} />
          </div>
        ) : (
          destinasi?.tempat_alam2 && (
            <div className="border-t pt-6 space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                🏞️ {destinasi.tempat_alam2}
              </h3>
              {destinasi.foto_alam2 && (
                <img
                  src={destinasi.foto_alam2}
                  alt={destinasi.tempat_alam2}
                  className="w-full h-52 object-cover rounded-md"
                />
              )}
              <p className="text-gray-600">{destinasi.deskripsi_alam2}</p>
            </div>
          )
        )}

        {/* Tombol Kembali */}
        <div className="pt-6">
          <Link
            to="/destinasi"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            ← Kembali ke Daftar Destinasi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinasiDetail;
